import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/signupForm';
import SignInForm from './components/signinForm';

class App extends Component {
  constructor(props) {
    super(props);

    const firebaseConfig = {
      apiKey: "AIzaSyDzF3Ngh41QnsEPvxXFDsUfXhNNMH7-vQw",
      authDomain: "one-time-password-b0ee4.firebaseapp.com",
      databaseURL: "https://one-time-password-b0ee4.firebaseio.com",
      projectId: "one-time-password-b0ee4",
      storageBucket: "one-time-password-b0ee4.appspot.com",
      messagingSenderId: "839485197050",
      appId: "1:839485197050:web:097c16d42a080c5f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;
