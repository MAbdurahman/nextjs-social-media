const UserModel = require('./../models/UserModel');
const NotificationModel = require('./../models/NotificationModel');

/*=============================================
            setNotificationToUnread
================================================*/
const setNotificationToUnread = async userId => {
	try {
		const user = await UserModel.findById(userId);

		if (!user.unreadNotification) {
			user.unreadNotification = true;
			await user.save();
		}

		return;
	} catch (error) {
		console.error(error);
	}
};
/*=============================================
            newLikeNotification
================================================*/
const newLikeNotification = async (userId, postId, userToNotifyId) => {
	try {
		const userToNotify = await NotificationModel.findOne({
			user: userToNotifyId,
		});

		const newNotification = {
			type: 'newLike',
			user: userId,
			post: postId,
			date: Date.now(),
		};

		await userToNotify.notifications.unshift(newNotification);
		await userToNotify.save();

		await setNotificationToUnread(userToNotifyId);
		return;
	} catch (error) {
		console.error(error);
	}
};
/*=============================================
            removeLikeNotification
================================================*/
const removeLikeNotification = async (userId, postId, userToNotifyId) => {
	try {
		// Here we are simply using $pull operator to remove the notification from notifications array.
		// Notice we are finding the notification inside Notifications array by adding its type, userId & postId

		await NotificationModel.findOneAndUpdate(
			{ user: userToNotifyId },
			{
				$pull: {
					notifications: {
						type: 'newLike',
						user: userId,
						post: postId,
					},
				},
			}
		);

		return;
	} catch (error) {
		console.error(error);
	}
};

/*=============================================
            newCommentNotification
================================================*/
const newCommentNotification = async (
	postId,
	commentId,
	userId,
	userToNotifyId,
	text
) => {
	try {
		const userToNotify = await NotificationModel.findOne({
			user: userToNotifyId,
		});

		const newNotification = {
			type: 'newComment',
			user: userId,
			post: postId,
			commentId,
			text,
			date: Date.now(),
		};

		await userToNotify.notifications.unshift(newNotification);
		await userToNotify.save();
		await setNotificationToUnread(userToNotifyId);

		return;
	} catch (error) {
		console.error(error);
	}
};
/*=============================================
            removeCommentNotification
================================================*/
const removeCommentNotification = async (
	postId,
	commentId,
	userId,
	userToNotifyId
) => {
	try {
		await NotificationModel.findOneAndUpdate(
			{ user: userToNotifyId },
			{
				$pull: {
					notifications: {
						type: 'newComment',
						user: userId,
						post: postId,
						commentId: commentId,
					},
				},
			}
		);

		return;
	} catch (error) {
		console.error(error);
	}
};
/*=============================================
            newFollowerNotification
================================================*/
const newFollowerNotification = async (userId, userToNotifyId) => {
	try {
		const user = await NotificationModel.findOne({ user: userToNotifyId });

		const newNotification = {
			type: 'newFollower',
			user: userId,
			date: Date.now(),
		};

		await user.notifications.unshift(newNotification);
		await user.save();
		await setNotificationToUnread(userToNotifyId);

		return;
	} catch (error) {
		console.error(error);
	}
};
/*=============================================
            removeFollowerNotification
================================================*/
const removeFollowerNotification = async (userId, userToNotifyId) => {
	try {
		await NotificationModel.findOneAndUpdate(
			{ user: userToNotifyId },
			{ $pull: { notifications: { type: 'newFollower', user: userId } } }
		);

		return;
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	newLikeNotification,
	removeLikeNotification,
	newCommentNotification,
	removeCommentNotification,
	newFollowerNotification,
	removeFollowerNotification,
};
