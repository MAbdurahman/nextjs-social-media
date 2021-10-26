import React, { useState } from 'react'
import {
	Card,
	Icon,
	Image,
	Divider,
	Segment,
	Button,
	Popup,
	Header,
	Modal,
} from 'semantic-ui-react';
import PostComments from './PostComments';
import CommentInputField from './CommentInputField';
import Link from 'next/link'


export default function CardPost({ post, user, setPosts, setShowToastr }) {
	//**************** variables ****************//
   const [likes, setLikes] = useState(post.likes);
   const [comments, setComments] = useState(post.comments);
	//**************** functions ****************//
	return (
		<div>
			<h2>this cardPost.js</h2>
		</div>
	);
}
