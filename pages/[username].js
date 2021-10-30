import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';

export default function ProfilePage() {
	//**************** variables ****************//
   const router = useRouter();
   const { username } = router.query;
	return (
      <div>
         <h2>{username}</h2>
      </div>
   )
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
