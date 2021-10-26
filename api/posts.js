const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const UserModel = require('../models/UserModel');
const PostModel = require('../models/PostModel');
const FollowerModel = require('../models/FollowerModel');
const uuid = require('uuid').v4;

/*=============================================
            Create A Post 
================================================*/
router.post('/', authMiddleware, async (req, res) => {
	const { text, location, picUrl } = req.body;

	if (text.length < 1)
		return res.status(401).send('Text must be at least 1 character');

	try {
		const newPost = {
			user: req.userId,
			text,
		};
		if (location) newPost.location = location;
		if (picUrl) newPost.picUrl = picUrl;

		const post = await new PostModel(newPost).save();

		const postCreated = await PostModel.findById(post._id).populate('user');

		return res.json(postCreated);

	} catch (error) {
		console.error(error);
		return res.status(500).send(`Server Error`);

	}
});

/*=============================================
            Get All Posts
================================================*/
router.get('/', authMiddleware, async (req, res) => {
	const { pageNumber } = req.query;

	const number = Number(pageNumber);
	const size = 8;

	try {
		let posts;

		if (number === 1) {
			posts = await PostModel.find()
				.limit(size)
				.sort({ createdAt: -1 })
				.populate('user')
				.populate('comments.user');

		} else {
			const skips = size * (number - 1);
			posts = await PostModel.find()
				.skip(skips)
				.limit(size)
				.sort({ createdAt: -1 })
				.populate('user')
				.populate('comments.user');

		}

		return res.json(posts);

	} catch (error) {
		console.error(error);
		return res.status(500).send(`Server Error`);

	}
});

/*=============================================
            Get Post By ID
================================================*/
router.get('/:postId', authMiddleware, async (req, res) => {
	try {
		const post = await PostModel.findById(req.params.postId)
			.populate('user')
			.populate('comments.user');

		if (!post) {
			return res.status(404).send('Post Not Found');
		}

		return res.json(post);

	} catch (error) {
		console.error(error);
		return res.status(500).send(`Server Error`);

	}
});

/*=============================================
            Delete Post
================================================*/
router.delete('/:postId', authMiddleware, async (req, res) => {
	try {
		const { userId } = req;

		const { postId } = req.params;

		const post = await PostModel.findById(postId);
		if (!post) {
			return res.status(404).send('Post Not Found');
		}

		const user = await UserModel.findById(userId);

		if (post.user.toString() !== userId) {
			if (user.role === 'root') {
				await post.remove();
				return res.status(200).send('Post Deleted Successfully');

			} else {
				return res.status(401).send('Unauthorized');

			}
		}

		await post.remove();
		return res.status(200).send('Post Deleted Successfully');

	} catch (error) {
		console.error(error);
		return res.status(500).send(`Server Error`);

	}
});

/*=============================================
               Like A Post
================================================*/
router.post('/like/:postId', authMiddleware, async (req, res) => {
	try {
		const { postId } = req.params;
		const { userId } = req;

		const post = await PostModel.findById(postId);
		if (!post) {
			return res.status(404).send('No Post found');
		}

		const isLiked =
			post.likes.filter(like => like.user.toString() === userId).length > 0;

		if (isLiked) {
			return res.status(401).send('Post Already Liked');
		}

		await post.likes.unshift({ user: userId });
		await post.save();

		return res.status(200).send('Post Liked');

	} catch (error) {
		console.error(error);
		return res.status(500).send(`Server Error`);
	}
});

/*=============================================
            Unlike A Post
================================================*/
router.put('/unlike/:postId', authMiddleware, async (req, res) => {
	try {
		const { postId } = req.params;
		const { userId } = req;

		const post = await PostModel.findById(postId);
		if (!post) {
			return res.status(404).send('No Post found');
		}

		const isLiked =
			post.likes.filter(like => like.user.toString() === userId).length ===
			0;

		if (isLiked) {
			return res.status(401).send('Post Not Liked Before');
		}

		const index = post.likes
			.map(like => like.user.toString())
			.indexOf(userId);

		await post.likes.splice(index, 1);

		await post.save();

		return res.status(200).send('Post Unliked');

	} catch (error) {
		console.error(error);
		return res.status(500).send(`Server Error`);

	}
});

/*=============================================
				Get All Likes Of A Post
================================================*/
router.get('/like/:postId', authMiddleware, async (req, res) => {
	try {
		const { postId } = req.params;

		const post = await PostModel.findById(postId).populate('likes.user');
		if (!post) {
			return res.status(404).send('No Post Found');
		}

		return res.status(200).json(post.likes);

	} catch (error) {
		console.error(error);
		return res.status(500).send(`Server Error`);

	}
});

/*=============================================
				Create A Comment
================================================*/
router.post('/comment/:postId', authMiddleware, async (req, res) => {
	try {
		const { postId } = req.params;

		const { text } = req.body;

		if (text.length < 1)
			return res.status(401).send('Comment should be at least 1 character');

		const post = await PostModel.findById(postId);

		if (!post) return res.status(404).send('Post Not Found');

		const newComment = {
			_id: uuid(),
			text,
			user: req.userId,
			date: Date.now(),
		};

		await post.comments.unshift(newComment);
		await post.save();

		return res.status(200).json(newComment._id);

	} catch (error) {
		console.error(error);
		return res.status(500).send(`Server Error`);
	}
});

/*=============================================
            Delete A Comment
================================================*/
router.delete('/:postId/:commentId', authMiddleware, async (req, res) => {
	try {
		const { postId, commentId } = req.params;
		const { userId } = req;

		const post = await PostModel.findById(postId);
		if (!post) return res.status(404).send('Post Not Found');

		const comment = post.comments.find(comment => comment._id === commentId);
		if (!comment) {
			return res.status(404).send('No Comment Found');
		}

		const user = await UserModel.findById(userId);

		const deleteComment = async () => {
			const indexOf = post.comments
				.map(comment => comment._id)
				.indexOf(commentId);

			await post.comments.splice(indexOf, 1);

			await post.save();

			return res.status(200).send('Deleted Successfully');
		};

		if (comment.user.toString() !== userId) {
			if (user.role === 'root') {
				await deleteComment();

			} else {
				return res.status(401).send('Unauthorized');

			}
		}

		await deleteComment();
		
	} catch (error) {
		console.error(error);
		return res.status(500).send(`Server Error`);
	}
});

module.exports = router;