import {View, Text, TextInput, TextInputProps, StyleSheet} from 'react-native';
import React from 'react';
import {theme} from '../../../../styles';

const TextField = ({icon, ...props}: TextFieldType) => {
  return (
    <View>
      <TextInput {...props} style={[styles.input, props.style]} />
      <View style={styles.icon}>{icon}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
  },
  input: {
    paddingLeft: 30,
    fontSize: 17,
    color: theme.colors.text,
  },

  icon: {
    position: 'absolute',
    left: 0,
  },
});

interface TextFieldType extends TextInputProps {
  isLoading?: string;
  icon?: React.ReactNode;
}
export default TextField;
