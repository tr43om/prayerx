import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {UserAvatar} from '../UserAvatar';
import {theme} from '../../styles';
import {IconAdd} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MembersList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Members</Text>
      <View style={styles.avatarList}>
        <UserAvatar username="Saint Boy" />
        <UserAvatar username="Jesus Christ" />
        <UserAvatar username="Prayer Beast" />
        <TouchableOpacity style={styles.iconContainer}>
          <IconAdd fill="#fff" style={{transform: [{scale: 0.7}]}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  title: {
    fontSize: 13,
    color: theme.colors.primary,
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  avatarList: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: 32,
    aspectRatio: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MembersList;
