import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {theme} from '../../../../styles';

const PrimaryButton = ({isLoading, title, ...props}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

interface PrimaryButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  title: string;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: `${theme.colors.primary}`,

    borderRadius: 50,
    paddingHorizontal: 17,
    paddingVertical: 8,
  },
  textStyle: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
