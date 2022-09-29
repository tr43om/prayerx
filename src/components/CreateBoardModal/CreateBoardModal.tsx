import * as yup from 'yup';
import React from 'react';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {View, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import {FormInput} from '../FormInput';
import {
  selectCreateBoardModalVisibility,
  toggleCreateBoardModal,
  requestAddBoard,
  selectBoardRequestProgress,
  useAppDispatch,
} from '../../store';

import {useSelector} from 'react-redux';
import {PrimaryButton} from '../ui';
import {Statuses, BoardsRequestDto} from '../../types';

const CreateBoardModal = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectBoardRequestProgress);

  const isCreateBoardModalVisible = useSelector(
    selectCreateBoardModalVisibility,
  );

  const {handleSubmit, control, reset} = useForm<BoardsRequestDto>({
    defaultValues: {
      title: '',
      description: '',
    },

    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const addNewBoard = handleSubmit(data => {
    dispatch(requestAddBoard(data));

    reset();
  });

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isCreateBoardModalVisible}
        onRequestClose={() => {
          dispatch(toggleCreateBoardModal());
        }}>
        <TouchableOpacity style={styles.centeredView} activeOpacity={1}>
          <View style={styles.modalView}>
            <FormInput
              placeholder="Type a new board name..."
              name="title"
              control={control}
              onSubmitEditing={addNewBoard}
            />
            <PrimaryButton
              onPress={addNewBoard}
              title="Add Board"
              isLoading={isLoading === Statuses.PENDING}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const schema = yup.object().shape({
  title: yup.string().min(3, 'Title of board should be at least 2 characters'),
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CreateBoardModal;
