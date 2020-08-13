import React, { useState, useEffect } from 'react';
import './TweetBox.css';
import { Button, Avatar } from '@material-ui/core';
import db from './firebase';
function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const sendTweet = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			verified: true,
			displayName: 'Harun Gachanja',
			username: 'CR7goatee',
			text: tweetMessage,
			image: tweetImage,
			avatar: 'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png',
		});

		setTweetMessage("");
		setTweetImage("");
	};
	return (
		<div className="tweetBox">
			<form action="">
				<div className="tweetBox__input">
					<Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="Whats happening?"
						type="text"
					/>
				</div>
				<input
					onChange={(e) => setTweetImage(e.target.value)}
					value={tweetImage}
					className="tweetBox__imageInput"
					placeholder="Enter image url"
					type="text"
				/>
				<Button className="tweetBox__tweetButton" type="submit" onClick={sendTweet}>
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
