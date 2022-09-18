import {View, Text, TextInputProps} from 'react-native';
import {TextInput} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const Input = (props: InputType) => {
  return (
    <View>
      <TextInputStyled {...props} />
    </View>
  );
};

interface InputType extends TextInputProps {}

const TextInputStyled = styled(TextInput)`
  border: 1px solid black;
  padding: 10px;
`;

export default Input;
