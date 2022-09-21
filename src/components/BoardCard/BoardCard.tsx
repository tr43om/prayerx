import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../screens';
import {StyleSheet} from 'react-native';

const BoardCard = ({title}: BoardCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Board', {name: title})}>
        <Text style={styles.content}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 4,
    padding: 20,
    color: '#514D47',
  },
  content: {
    fontWeight: '500',
  },
});

type BoardCardProps = {
  title: string;
};

export default BoardCard;
