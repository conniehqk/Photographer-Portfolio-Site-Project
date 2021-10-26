const Messages = ({ message }) => {
	return (
		<div class="message-blue">
			<p class="message-content">{message.message}</p>
			<div class="message-from">From: {message.name} ({message.email})</div>
		</div>
	);
};

export default Messages;
