import React, { useState } from 'react';
import { Form, Segment } from 'semantic-ui-react';

export default function MessageInputField({ sendMsg }) {
	//**************** variables ****************//
	const [text, setText] = useState('');
	const [loading, setLoading] = useState(false);

	//**************** functions ****************//
   const handleChange = e => {
      setText(e.target.value)
   }

	const handleSubmit = e => {
		e.preventDefault();
		sendMsg(text);
		setText('');
		setLoading(false);
	};

	return (
		<div style={{ position: 'sticky', bottom: '0' }}>
			<Segment secondary color='teal' attached='bottom'>
				<Form reply onSubmit={handleSubmit}>
					<Form.Input
						size='large'
						placeholder='Send New Message'
						value={text}
						onChange={handleChange}
						action={{
							color: 'blue',
							icon: 'telegram plane',
							disabled: text === '',
							loading: loading,
						}}
					/>
				</Form>
			</Segment>
		</div>
	);
}
