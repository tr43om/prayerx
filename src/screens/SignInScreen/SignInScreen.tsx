import {Button, Text, View} from 'react-native';
import React from 'react';

import {FormInput} from '../../components';

import * as yup from 'yup';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {requestSignIn} from '../../store';
import {useAppDispatch} from '../../store';
import {AuthSignInDto} from '../../types';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../root-routes';
import {Routes} from '../../constants';

const SignInScreen: React.FC<SignInScreenProps> = () => {
  const dispatch = useAppDispatch();

  const {handleSubmit, control, reset} = useForm<AuthSignInDto>({
    defaultValues: {
      email: '',
      password: '',
    },

    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleSignIn = handleSubmit(data => {
    dispatch(requestSignIn(data));
    reset();
  });

  return (
    <View>
      <FormInput
        placeholder="Email"
        keyboardType="email-address"
        name="email"
        control={control}
      />
      <FormInput
        placeholder="Password"
        secureTextEntry={true}
        name="password"
        control={control}
      />

      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup.string().required('Please Enter your password'),
});

type SignInScreenProps = NativeStackScreenProps<RootStackParams, Routes.signin>;

export default SignInScreen;
