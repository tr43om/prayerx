import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

const DeleteButton = () => {
  return (
    <View style={[styles.deleteContainer]}>
      <Text style={[styles.deleteText]}>Delete</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  deleteContainer: {
    backgroundColor: '#AC5253',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderRadius: 4,
  },
  deleteText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingRight: 20,
  },
});

export default DeleteButton;
