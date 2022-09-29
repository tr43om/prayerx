import {TouchableOpacity} from 'react-native';
import React from 'react';
import {IconAdd} from '../../../assets';
import {toggleCreateBoardModal, useAppDispatch} from '../../../store';

const AddButton = () => {
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(toggleCreateBoardModal())}>
      <IconAdd />
    </TouchableOpacity>
  );
};

export default AddButton;
