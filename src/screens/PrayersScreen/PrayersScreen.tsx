import {View, Text} from 'react-native';

import * as yup from 'yup';
import React from 'react';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {useEffect} from 'react';
import {requestAddPrayer, useAppDispatch} from '../../store';
import {useSelector} from 'react-redux';
import {requestGetPrayers} from '../../store';
import {PrayersList} from '../../components/PrayersList ';
import {RootState} from '../../store';
import {selectPrayersById} from '../../store';
import {PrayersRequestDto} from '../../types';
import {FormInput} from '../../components';
import {selectPrayers} from '../../store';
import {useMemo} from 'react';

const PrayersScreen = ({boardId}: PrayersScreenProps) => {
  const dispatch = useAppDispatch();
  const prayers = useSelector(selectPrayers);

  // const currentPrayers = useMemo(
  //   () => prayers.filter(prayer => prayer.columnId === boardId),
  //   [prayers, boardId],
  // );

  const currentPrayers = prayers.filter(prayer => prayer.columnId === boardId);

  // const prayers = useSelector((state: RootState) =>
  //   selectPrayersById(state, boardId),
  // );

  const {
    handleSubmit,
    control,
    reset,
    formState: {isSubmitSuccessful},
  } = useForm<PrayersRequestDto>({
    defaultValues: {
      title: '',
      description: '',
      checked: false,
      columnId: boardId,
    },

    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    dispatch(requestGetPrayers());
  }, [dispatch]);

  const addNewPrayer = handleSubmit(data => {
    dispatch(requestAddPrayer(data));

    reset();
  });

  return (
    <View>
      <FormInput
        placeholder="Add a prayer..."
        name="title"
        control={control}
        onSubmitEditing={addNewPrayer}
      />
      {currentPrayers.length !== 0 ? (
        <PrayersList prayers={currentPrayers} />
      ) : (
        <Text>No prayers bro </Text>
      )}
    </View>
  );
};

const schema = yup.object().shape({
  title: yup.string().min(3, 'Title of prayer should be at least 2 characters'),
});

type PrayersScreenProps = {
  boardId: number;
};

export default PrayersScreen;
