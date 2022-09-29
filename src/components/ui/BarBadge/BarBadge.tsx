import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {theme} from '../../../styles';

const BarBadge = ({count}: BarBadgeType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    width: 16,
    height: 16,
    borderRadius: 50,
  },
  count: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
  },
});

type BarBadgeType = {
  count: number;
};

export default BarBadge;
