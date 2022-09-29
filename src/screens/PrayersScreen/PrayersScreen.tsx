import {View, Text, StyleSheet} from 'react-native';

import * as yup from 'yup';
import React from 'react';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {useEffect} from 'react';
import {requestAddPrayer, selectPrayersById, useAppDispatch} from '../../store';
import {useSelector} from 'react-redux';
import {requestGetPrayers} from '../../store';
import {PrayersList} from '../../components/PrayersList ';

import {PrayersRequestDto} from '../../types';
import {FormInput, PrimaryButton} from '../../components';
import {selectPrayers} from '../../store';
import {selectPrayerRequestProgress} from '../../store';
import {useMemo} from 'react';
import {RootState} from '../../store/store';
import {toggleShowAnsweredPrayersList} from '../../store';
import {selectAnsweredPrayersVisibility} from '../../store/ducks/prayers/selectors';

const PrayersScreen = ({boardId}: PrayersScreenProps) => {
  const dispatch = useAppDispatch();
  const prayers = useSelector((state: RootState) =>
    selectPrayersById(state, boardId),
  );

  const unAnsweredPrayers = prayers.filter(prayer => prayer.checked === false);

  const answeredPrayers = prayers.filter(prayer => prayer.checked === true);
  const isAnsweredPrayersVisible = useSelector(selectAnsweredPrayersVisibility);

  const isLoading = useSelector(selectPrayerRequestProgress);

  const {handleSubmit, control, reset} = useForm<PrayersRequestDto>({
    defaultValues: {
      title: '',
      description: '',
      checked: false,
      columnId: boardId,
      createdAt: new Date(),
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

  const showAnsweredPrayers = () => {
    dispatch(toggleShowAnsweredPrayersList());
  };

  return (
    <View>
      <FormInput
        placeholder="Add a prayer..."
        name="title"
        control={control}
        onSubmitEditing={addNewPrayer}
        isLoading={isLoading}
      />
      {prayers.length !== 0 ? (
        <>
          <PrayersList prayers={unAnsweredPrayers} />
          <PrimaryButton
            title={
              isAnsweredPrayersVisible
                ? 'Hide answered prayers'
                : 'Show answered prayers'
            }
            onPress={showAnsweredPrayers}
          />
          {isAnsweredPrayersVisible && (
            <PrayersList
              prayers={answeredPrayers}
              listStyles={styles.answeredPrayers}
            />
          )}
        </>
      ) : (
        <Text>No prayers bro </Text>
      )}
    </View>
  );
};

const schema = yup.object().shape({
  title: yup.string().min(3, 'Title of prayer should be at least 2 characters'),
});

const styles = StyleSheet.create({
  answeredPrayers: {
    marginTop: 30,
  },
});

type PrayersScreenProps = {
  boardId: number;
};

export default PrayersScreen;
