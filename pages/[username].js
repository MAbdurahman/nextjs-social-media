import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';
import cookie from 'js-cookie';
import { NoProfile } from './../components/Layout/NoData';
import { Grid } from 'semantic-ui-react';
import ProfileMenuTabs from '../components/profile/ProfileMenuTabs';

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

	if (errorLoading) return <NoProfile />;
	return (
		<>
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
