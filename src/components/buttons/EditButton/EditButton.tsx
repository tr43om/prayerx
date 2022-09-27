import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {IconEdit} from '../../../assets';

const EditButton = ({onEdit}: EditButtonProps) => {
  return (
    <TouchableOpacity style={[styles.deleteContainer]} onPress={onEdit}>
      {/* <Text style={[styles.deleteText]}>Edit</Text> */}
      <IconEdit width={18} height={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deleteContainer: {
    // backgroundColor: '#FD716A',
    flex: 1,

    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 4,
  },
  deleteText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingRight: 20,
  },
});

type EditButtonProps = {
  onEdit: () => void;
};

export default EditButton;
