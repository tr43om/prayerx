import {View, Text, TouchableOpacity, Pressable} from 'react-native';
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
import Checkbox from '@react-native-community/checkbox';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {IconPrayer, IconUser} from '../../assets';

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
        <Pressable
          style={[styles.container]}
          onPress={() => navigation.navigate('Prayer')}>
          <BouncyCheckbox
            size={22}
            text={title}
            textStyle={{fontWeight: '500'}}
            fillColor={theme.colors.primary}
            iconStyle={{borderRadius: 4}}
            innerIconStyle={{borderRadius: 4}}
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
      </Swipeable>
    </Animated.View>
  );
};

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
});

type PrayerCardProps = {
  title: string;
  id: number;
};

export default PrayerCard;
