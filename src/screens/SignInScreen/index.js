import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  ScreenSafeContainer,
  ScreenTitle,
  BlockButton,
  Input,
  AuthScreenBottomButton,
} from '../../components';

function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home', { screen: 'HomeScreen' });
      })
      .catch((error) => Alert.alert('Registration Failed!', error.message));
  }

  function goToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <ScreenSafeContainer>
      <KeyboardAvoidingView>
        <ScreenTitle>Sign In</ScreenTitle>

        <View style={{ height: 10 }} />

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

        <BlockButton func={signIn}>Sign In</BlockButton>

        <View style={{ height: 20 }} />

        <AuthScreenBottomButton func={goToSignUpScreen}>
          Don't have an account yet? Sign up.
        </AuthScreenBottomButton>
      </KeyboardAvoidingView>
    </ScreenSafeContainer>
  );
}

export default SignInScreen;
