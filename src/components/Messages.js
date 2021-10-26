const Messages = ({ message }) => {
	return (
		<>
			<li>
				<h3>{message.name}</h3>
				<p>{message.message}</p>
			</li>
		</>
	);
};

export default Messages;
