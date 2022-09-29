import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {IconBack, IconPrayerLine} from '../../assets';
import {theme} from '../../styles';

const PrayerHeader = ({headerProps}: PrayerHeaderProps) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => headerProps.navigation.goBack()}>
          <IconBack width={18} height={16} />
        </TouchableOpacity>

        <TouchableOpacity>
          <IconPrayerLine width={29} height={22} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        Prayer item two which is for my family to love God whole heartedly.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    height: 150,
  },

  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  title: {
    color: '#fff',
    fontSize: 17,
    padding: 15,
  },
});

type PrayerHeaderProps = {
  headerProps: NativeStackHeaderProps;
};

export default PrayerHeader;
