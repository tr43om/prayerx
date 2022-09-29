import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SubscriptionsScreen = () => {
  return (
    <View>
      <Text style={styles.noSubscriptionsText}>You have no subscriptions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noSubscriptionsText: {
    color: '#9c9c9c',
  },
});

export default SubscriptionsScreen;
