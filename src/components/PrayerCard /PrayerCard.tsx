import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../screens';
import {StyleSheet} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import Animated, {
  Layout,
  LightSpeedInRight,
  StretchOutY,
} from 'react-native-reanimated';
import {theme} from '../../styles';
import {useAppDispatch} from '../../store';
import {requestDeletePrayer} from '../../store';
import {DeleteButton} from '../DeleteButton';

const PrayerCard = ({title, id}: PrayerCardProps) => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <Animated.View
      layout={Layout.springify().duration(1000)}
      entering={LightSpeedInRight.duration(500).springify()}
      exiting={StretchOutY}>
      <Swipeable
        renderRightActions={() => <DeleteButton />}
        onSwipeableOpen={() => dispatch(requestDeletePrayer(id))}>
        <TouchableOpacity
          style={[styles.container]}
          onPress={() => navigation.navigate('Prayer')}>
          <Text style={styles.content}>{title}</Text>
        </TouchableOpacity>
      </Swipeable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

type PrayerCardProps = {
  title: string;
  id: number;
};

export default PrayerCard;
