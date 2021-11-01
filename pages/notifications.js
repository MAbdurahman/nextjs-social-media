import React, { useEffect, useState } from 'react';
import { Feed, Segment, Divider, Container } from 'semantic-ui-react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';
import cookie from 'js-cookie';

export default function Notifications({ notifications, errorLoading, user, userFollowStats }) {
	//**************** variables ****************//
   
	//**************** functions ****************//
	return (
		<div>
			<h2>this is pages/notifications.js</h2>
		</div>
	);
}

Notifications.getInitialProps = async ctx => {
	try {
		const { token } = parseCookies(ctx);

		const res = await axios.get(`${baseUrl}/api/notifications`, {
			headers: { Authorization: token },
		});

		return { notifications: res.data };
	} catch (error) {
		return { errorLoading: true };
	}
};
