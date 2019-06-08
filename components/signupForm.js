import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-b0ee4.cloudfunctions.net';

class SignUpForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			phone: ''
		}
	}

	handleSubmit() {
		axios.post(`${ROOT_URL}/createUser`,{ phone: this.state.phone })
		.then(res => {
			axios.post(`${ROOT_URL}/requestOTC`,{ phone: this.state.phone })
		});
	}

	render() {
		return (
			<View>
				<View style={{ marginBottom: 15 }}>
					<FormLabel>Enter Phone Number</FormLabel>
					<FormInput
						value={this.state.phone}
						onChangeText={phone => this.setState({phone})}
					/>
				</View>
				<Button
					title="Submit"
					onPress={() => handleSubmit()}
				/>
			</View>
		)
	}
}

export default SignUpForm;