import React from 'react';
import './Post.css';
import { Button, Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({ displayName, username, verified, text, image, avatar }) {
	return (
		<div className="post">
			<div className="post__avatar">
				<Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
			</div>
			<div className="post__body">
				<div className="post__header">
					<div className="post__headerText">
						<h3>
							Harun Gachanja
							<span className="post__headerSpecial">
								<VerifiedUserIcon className="post__badge" />
								@ArrotechDesign
							</span>
						</h3>
					</div>
					<div className="post__headerDescription">
						<p>I challenge myself to build twitter clone app.</p>
					</div>
				</div>
				<img src="https://media.giphy.com/media/MSCmj0qsPPTDq/giphy.gif" alt="GIF" />
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
