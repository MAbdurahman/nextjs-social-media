import React, { useState } from 'react';
import { List, Image, Search } from 'semantic-ui-react';
import axios from 'axios';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import baseUrl from '../../utils/baseUrl';
let cancel;

export default function ChatListSearch() {
	//**************** variables ****************//
	const [text, setText] = useState('');
	const [loading, setLoading] = useState(false);
	const [results, setResults] = useState([]);
	const router = useRouter();
	//**************** functions ****************//
   const handleChange = async e => {
      console.log('handle change')
   }

   const addChat = (result)=> {

   }
	return (
		<Search
			onBlur={() => {
				results.length > 0 && setResults([]);
				loading && setLoading(false);
				setText('');
			}}
			loading={loading}
			value={text}
			resultRenderer={ResultRenderer}
			results={results}
			onSearchChange={handleChange}
			minCharacters={1}
			onResultSelect={(e, data) => addChat(data.result)}
		/>
	);
}

const ResultRenderer = ({ _id, profilePicUrl, name }) => {
	return (
		<List key={_id}>
			<List.Item>
				<Image src={profilePicUrl} alt='ProfilePic' avatar />
				<List.Content header={name} as='a' />
			</List.Item>
		</List>
	);
};
