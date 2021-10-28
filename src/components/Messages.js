import { Button } from 'react-bootstrap';

const Messages = ({ message, handleDeleteMessage }) => {
	const handleMessage = (e) => {
		handleDeleteMessage(e);
	};
	return (
		<div className="message-blue">
			<p className="message-content">{message.message}</p>
			<div className="message-from">
				From: {message.name} ({message.email})
			</div>
			<Button
				className="mt-3"
				variant="danger"
				size="sm"
				onClick={() => handleMessage(message)}
			>
				Delete
			</Button>
		</div>
	);
};

export default Messages;
