import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

const UserAvatar = ({username}: UserAvatarProps) => {
  return (
    <View>
      <Image
        source={{
          uri: `https://ui-avatars.com/api/?background=random&name=${username}`,
        }}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 32,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 8,
  },
});

type UserAvatarProps = {
  username: string;
};

export default UserAvatar;
