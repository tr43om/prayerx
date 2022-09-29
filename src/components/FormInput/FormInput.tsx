import styled from 'styled-components';
import React, {ReactNode, InputHTMLAttributes} from 'react';

// react-hook-form
import {
  UseControllerProps,
  FieldValues,
  useController,
  Path,
} from 'react-hook-form';

import {StyleSheet} from 'react-native';

// components
import {Input, TextField} from '../ui';
import {Text, TextInputProps, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {theme} from '../../styles';

const FormInput = <TFormValues extends FieldValues>(
  props: FormInputProps<TFormValues>,
) => {
  const {
    field: {onChange, value},
    formState: {errors},
  } = useController(props);

  const errorMessage = errors[props.name]?.message?.toString();

  return (
    <View style={styles.container}>
      {props.textInput ? (
        <TextField
          placeholder={props.placeholder || 'Type a new value...'}
          onChangeText={onChange}
          value={value}
          {...props}
        />
      ) : (
        <>
          <Input
            placeholder={props.placeholder || 'Type a new value...'}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            autoCorrect={false}
            {...props}
          />
          {errors[props.name]?.message && <Text>{errorMessage}</Text>}
        </>
      )}
    </View>
  );
};

interface FormInputProps<TFormValues extends FieldValues>
  extends UseControllerProps<TFormValues>,
    Omit<TextInputProps, 'defaultValue'> {
  button?: ReactNode;
  name: Path<TFormValues>;
  isLoading?: string;
  textInput?: boolean;
  icon?: ReactNode;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  textInput: {
    width: '50%',
    marginLeft: 17,
    fontSize: 14,
    color: theme.colors.text,
    borderBottomColor: theme.colors.border,
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
});

export default FormInput;
