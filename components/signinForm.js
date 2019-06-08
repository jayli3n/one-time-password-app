import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import firebase from 'firebase';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-b0ee4.cloudfunctions.net';

class SignInForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			phone: '',
			code: ''
		}
	}

	handleSubmit() {
		const { phone, code } = this.state;
		axios.post(`${ROOT_URL}/verifyOTC`, { phone, code })
		.then(res => {
			firebase.auth().signInWithCustomToken(res.token);
		})
		.catch(err => console.log("verifyOTC", err));
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
				<View style={{ marginBottom: 15 }}>
					<FormLabel>Enter One Time Passcode</FormLabel>
					<FormInput
						value={this.state.code}
						onChangeText={code => this.setState({code})}
					/>
				</View>
				<Button
					title="Submit"
					onPress={() => this.handleSubmit()}
				/>
			</View>
		)
	}
}

export default SignInForm;