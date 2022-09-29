import * as yup from 'yup';
import React, {useState} from 'react';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../screens';

import {theme} from '../../styles';
import {
  requestDeletePrayer,
  requestUpdatePrayer,
  useAppDispatch,
} from '../../store';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {IconPrayer, IconUser} from '../../assets';

import {PrayersResponseDto, Routes} from '../../types';

import {SwipeableContainer} from '../swipeable/SwipeableContainer';
import {DeleteButton, EditButton} from '../buttons';
import {Swipeable} from 'react-native-gesture-handler';
import {useRef} from 'react';

import {FormInput} from '../FormInput';

const PrayerCard = ({prayer}: PrayerCardProps) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      title: prayer.title,
    },

    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const swipeableRef = useRef<Swipeable>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const updatePrayerCheckState = () => {
    const updatedPrayer = {
      ...prayer,
      checked: !prayer.checked,
    };

    dispatch(requestUpdatePrayer({id: prayer.id, data: updatedPrayer}));
  };

  const updatePrayerTitle = handleSubmit(({title}) => {
    const updatedPrayer = {
      ...prayer,
      title,
    };

    dispatch(requestUpdatePrayer({id: prayer.id, data: updatedPrayer}));

    setIsEditingTitle(false);
  });

  const rightActions = [
    <DeleteButton onDelete={() => dispatch(requestDeletePrayer(prayer.id))} />,
    <EditButton
      onEdit={() => {
        swipeableRef.current?.close();
        setIsEditingTitle(true);
      }}
    />,
  ];

  return (
    <SwipeableContainer rightActions={rightActions} swipeRef={swipeableRef}>
      <Pressable
        style={[styles.container]}
        onPress={() => navigation.navigate(Routes.prayer, {id: prayer.id})}>
        <BouncyCheckbox
          size={22}
          fillColor={theme.colors.primary}
          iconStyle={styles.checkboxIconStyle}
          innerIconStyle={styles.checkboxInnerIconStyle}
          onPress={updatePrayerCheckState}
          isChecked={prayer.checked}
          text={prayer.title}
          textComponent={
            isEditingTitle && (
              <FormInput
                placeholder="new title"
                name="title"
                control={control}
                onSubmitEditing={updatePrayerTitle}
                textInput
                autoFocus
                style={styles.input}
              />
            )
          }
        />

        <View style={styles.icons}>
          <View style={[styles.iconContainer, styles.iconManContainer]}>
            <IconUser
              width={15}
              height={20}
              fill={theme.colors.primary}
              style={styles.icon}
            />
            <Text>2</Text>
          </View>

          <View style={styles.iconContainer}>
            <IconPrayer fill={theme.colors.primary} style={styles.icon} />
            <Text>123</Text>
          </View>
        </View>
      </Pressable>

      <Text>{errors.title?.message}</Text>
    </SwipeableContainer>
  );
};

const schema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'Title of board should be at least 2 characters')
    .max(18),
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.background,
    borderRadius: 4,
    padding: 20,
    color: theme.colors.text,
  },
  content: {
    fontWeight: '500',
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconManContainer: {
    marginRight: 15,
  },

  icon: {
    marginRight: 5,
  },

  checkboxIconStyle: {
    borderRadius: 4,
  },

  checkboxInnerIconStyle: {
    borderRadius: 4,
  },

  input: {
    marginLeft: 17,
  },
});

type PrayerCardProps = {
  prayer: PrayersResponseDto;
};

export default PrayerCard;
