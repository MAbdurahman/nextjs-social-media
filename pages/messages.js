import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import { Segment, Header, Divider, Comment, Grid } from 'semantic-ui-react';

export default function Messages({ chatsData, user }) {
	//**************** variables ****************//
	const [chats, setChats] = useState(chatsData);
	//**************** functions ****************//
	return (
		<>
			<Segment padded basic size='large' style={{ marginTop: '5px' }}>
				<Header
					icon='home'
					content='Go Back!'
					onClick={() => router.push('/')}
					style={{ cursor: 'pointer' }}
				/>
				<h2>this is messages.js</h2>
				<Divider hidden />
			</Segment>
		</>
	);
}

Messages.getInitialProps = async ctx => {
	try {
		const { token } = parseCookies(ctx);

		const res = await axios.get(`${baseUrl}/api/chats`, {
			headers: { Authorization: token },
		});

		return { chatsData: res.data };
	} catch (error) {
		return { errorLoading: true };
	}
};
