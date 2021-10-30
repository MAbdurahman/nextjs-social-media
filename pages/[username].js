import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';
import { parseCookies } from 'nookies';
import cookie from 'js-cookie';
import baseUrl from '../utils/baseUrl';
import { NoProfile, NoProfilePosts } from './../components/Layout/NoData';
import { PlaceHolderPosts } from './../components/Layout/PlaceHolderGroup';
import CardPost from '../components/post/CardPost';
import ProfileMenuTabs from '../components/profile/ProfileMenuTabs';
import ProfileHeader from './../components/profile/ProfileHeader';
import { PostDeleteToastr } from '../components/Layout/Toastr';

export default function ProfilePage({
	errorLoading,
	profile,
	followersLength,
	followingLength,
	user,
	userFollowStats,
}) {
	//**************** variables ****************//
	const router = useRouter();
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [activeItem, setActiveItem] = useState('profile');
	const [showToastr, setShowToastr] = useState(false);
	const ownAccount = profile.user._id === user._id;
	const [loggedUserFollowStats, setUserFollowStats] =
		useState(userFollowStats);

	//**************** functions ****************//
	const handleItemClick = clickedTab => setActiveItem(clickedTab);

	useEffect(() => {
		const getPosts = async () => {
			setLoading(true);

			try {
				const { username } = router.query;
				const res = await axios.get(
					`${baseUrl}/api/profile/posts/${username}`,
					{
						headers: { Authorization: cookie.get('token') },
					}
				);

				setPosts(res.data);
			} catch (error) {
				alert('Error Loading Posts');
			}

			setLoading(false);
		};

		getPosts();
	}, [router.query.username]);

	useEffect(() => {
		showToastr && setTimeout(() => setShowToastr(false), 4000);
	}, [showToastr]);

	if (errorLoading) return <NoProfile />;
	return (
		<>
			{showToastr && <PostDeleteToastr />}
         
			<Grid stackable>
				<Grid.Row>
					<Grid.Column>
						<ProfileMenuTabs
							activeItem={activeItem}
							handleItemClick={handleItemClick}
							followersLength={followersLength}
							followingLength={followingLength}
							ownAccount={ownAccount}
							loggedUserFollowStats={loggedUserFollowStats}
						/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						{activeItem === 'profile' && (
							<>
								<ProfileHeader
									profile={profile}
									ownAccount={ownAccount}
									loggedUserFollowStats={loggedUserFollowStats}
									setUserFollowStats={setUserFollowStats}
								/>

								{loading ? (
									<PlaceHolderPosts />
								) : posts.length > 0 ? (
									posts.map(post => (
										<CardPost
											key={post._id}
											post={post}
											user={user}
											setPosts={setPosts}
											setShowToastr={setShowToastr}
										/>
									))
								) : (
									<NoProfilePosts />
								)}
							</>
						)}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	);
}

ProfilePage.getInitialProps = async ctx => {
	try {
		const { username } = ctx.query;
		const { token } = parseCookies(ctx);

		const res = await axios.get(`${baseUrl}/api/profile/${username}`, {
			headers: { Authorization: token },
		});

		const { profile, followersLength, followingLength } = res.data;

		return { profile, followersLength, followingLength };
	} catch (error) {
		return { errorLoading: true };
	}
};
