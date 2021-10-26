import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import CreatePost from './../components/post/CreatePost';
import CardPost from './../components/post/CardPost';
import { Segment } from 'semantic-ui-react';
import { parseCookies } from 'nookies';
import { NoPosts } from '../components/Layout/NoData';

export default function Index({ user, postsData, errorLoading }) {
	//**************** variables ****************//
	const [posts, setPosts] = useState(postsData || []);
	const [showToastr, setShowToastr] = useState(false);
	//**************** functions ****************//
	useEffect(() => {
		document.title = `Welcome, ${user.name.split(' ')[0]}`;
	}, []);

	if (posts.length === 0 || errorLoading) return <NoPosts />;

	return (
		<>
			<Segment>
				<CreatePost user={user} setPosts={setPosts} />

				{posts.map(post => (
					<CardPost
						key={post._id}
						post={post}
						user={user}
						setPosts={setPosts}
						setShowToastr={setShowToastr}
					/>
				))}
			</Segment>
		</>
	);
}

Index.getInitialProps = async ctx => {
	try {
		const { token } = parseCookies(ctx);

		const res = await axios.get(`${baseUrl}/api/posts`, {
			headers: { Authorization: token },
			params: { pageNumber: 1 },
		});

		return { postsData: res.data };
	} catch (error) {
		return { errorLoading: true };
	}
};
