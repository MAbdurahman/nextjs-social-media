import React, { useState } from 'react';
import Link from 'next/link';
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
import CommentInputField from './CommonInputField';
import calculateTime from '../../utils/calculateTime';

export default function CardPost({ post, user, setPosts, setShowToastr }) {
	//**************** variables ****************//
	const [likes, setLikes] = useState(post.likes);
	const [comments, setComments] = useState(post.comments);
	const [error, setError] = useState(null);
	const isLiked =
		likes.length > 0 &&
		likes.filter(like => like.user === user._id).length > 0;
	//**************** functions ****************//
	return (
		<>
			<Segment basic>
				<Card color='teal' fluid>
					{post.picUrl && (
						<Image
							src={post.picUrl}
							style={{ cursor: 'pointer' }}
							floated='left'
							wrapped
							ui={false}
							alt='PostImage'
						/>
					)}
					<Card.Content>
						<Image
							floated='left'
							src={post.user.profilePicUrl}
							avatar
							circular
						/>
						{(user.role === 'root' || post.user._id === user._id) && (
							<>
								<Popup
									on='click'
									position='top right'
									trigger={
										<Image
											src='/deleteIcon.svg'
											style={{ cursor: 'pointer' }}
											size='mini'
											floated='right'
										/>
									}
								>
									<Header as='h4' content='Are you sure?' />
									<p>This action is irreversible!</p>

									<Button color='red' icon='trash' content='Delete' />
								</Popup>
							</>
						)}
						<Card.Header>
							<Link href={`/${post.user.username}`}>
								<a>{post.user.name}</a>
							</Link>
						</Card.Header>
						<Card.Meta>{calculateTime(post.createdAt)}</Card.Meta>
					</Card.Content>
				</Card>
			</Segment>
		</>
	);
}
