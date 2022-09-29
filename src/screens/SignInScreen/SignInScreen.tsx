import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {FormInput} from '../../components';

import * as yup from 'yup';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {requestSignIn, useAppDispatch} from '../../store';
import {AuthSignInDto, Routes} from '../../types';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../root-routes';
import {theme} from '../../styles';

const SignInScreen: React.FC<SignInScreenProps> = ({navigation}) => {
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
        withoutIcon
      />
      <FormInput
        placeholder="Password"
        secureTextEntry={true}
        name="password"
        control={control}
        withoutIcon
      />

      <Button title="Sign In" onPress={handleSignIn} />
      <Text
        style={styles.redirectText}
        onPress={() => navigation.navigate(Routes.signup)}>
        or Create new account
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  redirectText: {
    color: theme.colors.primary,
    fontWeight: '500',
    fontSize: 15,
    marginTop: 15,

    textAlign: 'center',
  },
});

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup.string().required('Please Enter your password'),
});

type SignInScreenProps = NativeStackScreenProps<RootStackParams, Routes.signin>;

export default SignInScreen;
