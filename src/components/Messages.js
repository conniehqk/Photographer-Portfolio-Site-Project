const Messages = ({ message }) => {
	return (
		<div className="message-blue">
			<p className="message-content">{message.message}</p>
			<div className="message-from">
				From: {message.name} ({message.email})
			</div>
		</div>
	);
};

export default Messages;
