import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  ScreenSafeContainer,
  ScreenTitle,
  BlockButton,
  Input,
  AuthScreenBottomButton,
} from '../../components';

function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async () => {
        try {
          const userData = {
            username,
            email,
            createdAt: new Date(),
            gameType: 0,
            gameLevel: 2,
            // colorMode: 'Light Mode',
          };
          const userCollection = firestore().collection('Users');
          await userCollection.add(userData);
        } catch (error) {
          Alert.alert('Registration Failed!', error.message);
        }
      })
      .then(() => {
        navigation.navigate('Home', { screen: 'HomeScreen' });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert(
            'Registration Failed!',
            'The email you entered is already in use.',
          );
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert(
            'Registration Failed!',
            'You have entered an invalid email.',
          );
        }

        Alert.alert('Registration Failed!', error.message);
      });
  }

  function goToSignInScreen() {
    navigation.navigate('Auth', { screen: 'SignInScreen' });
  }

  return (
    <ScreenSafeContainer>
      <KeyboardAvoidingView>
        <ScreenTitle>Sign Up</ScreenTitle>

        <View style={{ height: 10 }} />

        <Input placeholder="Username" value={username} setValue={setUsername} />

        <Input
          placeholder="Email"
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
        />

        <Input
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureText={true}
        />

        <View style={{ height: 10 }} />

        <BlockButton func={signUp}>Sign Up</BlockButton>

        <View style={{ height: 20 }} />

        <AuthScreenBottomButton func={goToSignInScreen}>
          Do you already have an account? Sign in.
        </AuthScreenBottomButton>
      </KeyboardAvoidingView>
    </ScreenSafeContainer>
  );
}

export default SignUpScreen;
