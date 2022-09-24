import {Button, Text, View} from 'react-native';
import React from 'react';

import {FormInput} from '../../components';

import * as yup from 'yup';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {AuthSignUpDto} from '../../types';
import {useAppDispatch} from '../../store';
import {requestSignUp} from '../../store';

const SignUpScreen = () => {
  const dispatch = useAppDispatch();
  const {handleSubmit, control, reset} = useForm<AuthSignUpDto>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },

    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleSignUp = handleSubmit(data => {
    dispatch(requestSignUp(data));
    reset();
  });

  return (
    <View>
      <FormInput placeholder="Name" name="name" control={control} />
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

      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup.string().required('Please Enter your password'),
  name: yup.string().required('Please Enter your name'),
});

type SignUpScreenProps = {};

export default SignUpScreen;
