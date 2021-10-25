import React, { useEffect, useState }from 'react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';

export default function Index({ user, userFollowStats }) {
	//**************** variables ****************//
	//**************** functions ****************//
	useEffect(() => {
		document.title = `Welcome, ${user.name.split(' ')[0]}`;
	}, []);
	return (
		<div>
			<h2>this is homepage</h2>
		</div>
	);
}
