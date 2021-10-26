import React, { useState } from 'react';
import { List, Image, Search } from 'semantic-ui-react';
import axios from 'axios';
import cookie from 'js-cookie';
import Router from 'next/router';
import baseUrl from '../../utils/baseUrl';
let cancel;

export default function SearchComponent() {
	return (
		<div>
			<h2>this is search.js</h2>
		</div>
	);
}
