import styled from 'styled-components';
import React, {ReactNode, InputHTMLAttributes} from 'react';

// react-hook-form
import {
  UseControllerProps,
  FieldValues,
  useController,
  Path,
} from 'react-hook-form';

// components
import {Input} from '../ui';
import {Text, TextInputProps, View} from 'react-native';

const FormInput = <TFormValues extends FieldValues>(
  props: FormInputProps<TFormValues>,
) => {
  const {
    field: {onChange, value},
    formState: {errors},
  } = useController(props);

  const errorMessage = errors[props.name]?.message?.toString();

  return (
    <FieldContainer>
      <Input
        placeholder={props.placeholder || 'Type a new value...'}
        onChangeText={onChange}
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
      />
      {errors[props.name]?.message && <Text>{errorMessage}</Text>}
    </FieldContainer>
  );
};

interface FormInputProps<TFormValues extends FieldValues>
  extends UseControllerProps<TFormValues>,
    Omit<TextInputProps, 'defaultValue'> {
  button?: ReactNode;
  name: Path<TFormValues>;
  $success?: boolean;
}

const FieldContainer = styled(View)`
  width: 100%;
`;

export default FormInput;
