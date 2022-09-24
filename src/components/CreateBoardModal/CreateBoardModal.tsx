import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {selectCreateBoardModalVisibility} from '../../store';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../store/store';
import {toggleCreateBoardModal} from '../../store';
import {StyleSheet} from 'react-native';
import {Pressable} from 'react-native';
import {requestAddBoard} from '../../store';
import {Input} from '../ui';
import {PrimaryButton} from '../ui';
import {Statuses} from '../../constants';

import {selectBoardRequestProgress} from '../../store';

const CreateBoardModal = () => {
  const [board, setBoard] = useState('');
  const isLoading = useSelector(selectBoardRequestProgress);

  const isCreateBoardModalVisible = useSelector(
    selectCreateBoardModalVisibility,
  );

  const addNewBoard = () => {
    dispatch(requestAddBoard({title: board, description: ''}));
    if (isLoading === Statuses.SUCCEEDED) {
      dispatch(toggleCreateBoardModal());
      setBoard('');
    }
  };

  const dispatch = useAppDispatch();
  return (
    <View style={styles.centeredView}>
      {isCreateBoardModalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={isCreateBoardModalVisible}
          onRequestClose={() => {
            dispatch(toggleCreateBoardModal());
          }}>
          <TouchableOpacity
            style={styles.centeredView}
            activeOpacity={1}
            onPress={() => {
              dispatch(toggleCreateBoardModal());
            }}>
            <View style={styles.modalView}>
              <Input
                placeholder="Type a new board name..."
                value={board}
                onChangeText={text => setBoard(text)}
              />
              <PrimaryButton
                onPress={addNewBoard}
                title="Add Board"
                isLoading={isLoading === Statuses.PENDING}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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
