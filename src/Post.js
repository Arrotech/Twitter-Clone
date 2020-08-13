import React from 'react';
import './Post.css';
import { Button, Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({ displayName, username, verified, text, image, avatar }) {
	// "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
	// "https://media.giphy.com/media/MSCmj0qsPPTDq/giphy.gif"
	return (
		<div className="post">
			<div className="post__avatar">
				<Avatar src={avatar} />
			</div>
			<div className="post__body">
				<div className="post__header">
					<div className="post__headerText">
						<h3>
							{displayName}
							<span className="post__headerSpecial">
								{verified && <VerifiedUserIcon className="post__badge" />}
								@{username}
							</span>
						</h3>
					</div>
					<div className="post__headerDescription">
						<p>{text}</p>
					</div>
				</div>
				<img src={image} alt="GIF" />
				<div className="post__footer">
					<ChatBubbleOutlineIcon fontSize="small" />
					<RepeatIcon fontSize="small" />
					<FavoriteBorderIcon fontSize="small" />
					<PublishIcon fontSize="small" />
				</div>
			</div>
		</div>
	);
}

export default Post;
