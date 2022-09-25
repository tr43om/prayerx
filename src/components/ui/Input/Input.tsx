import {
  View,
  Text,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native';
import React from 'react';
import {IconAdd} from '../../../assets';
import {theme} from '../../../styles';

const Input = ({...props}: InputType) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        {...props}
      />

      <TouchableOpacity style={styles.icon}>
        <IconAdd width={22} height={22} />
      </TouchableOpacity>
    </View>
  );
};

interface InputType extends TextInputProps {}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
    fontSize: 17,
    padding: 15,
    paddingLeft: 50,
    marginBottom: 20,
    borderRadius: 4,
  },
  icon: {
    position: 'absolute',
    top: 14,
    left: 15,
  },
});

export default Input;
