import {
  View,
  Text,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {TextInput} from 'react-native';
import React from 'react';
import {IconAdd} from '../../../../assets';
import {theme} from '../../../../styles';
import {Statuses} from '../../../../constants';

const Input = ({isLoading, ...props}: InputType) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.placeholder}
        {...props}
      />
      {isLoading === Statuses.PENDING ? (
        <ActivityIndicator style={styles.icon} color={theme.colors.primary} />
      ) : (
        <IconAdd width={22} height={22} style={styles.icon} />
      )}
    </View>
  );
};

interface InputType extends TextInputProps {
  isLoading?: string;
}

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
