import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {IconTrash} from '../../../assets';

const DeleteButton = ({onDelete}: DeleteButtonProps) => {
  return (
    <TouchableOpacity style={[styles.deleteContainer]} onPress={onDelete}>
      <IconTrash width={20} height={22} fill="#d7563f" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deleteContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderRadius: 4,
  },
});

type DeleteButtonProps = {
  onDelete: () => void;
};

export default DeleteButton;
