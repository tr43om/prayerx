import {
  View,
  Text,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native';
import React from 'react';

const Input = ({icon, ...props}: InputType) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
      {icon && <TouchableOpacity>{icon}</TouchableOpacity>}
    </View>
  );
};

interface InputType extends TextInputProps {
  icon?: JSX.Element;
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 20,
    borderRadius: 4,
  },
  icon: {},
});

export default Input;
