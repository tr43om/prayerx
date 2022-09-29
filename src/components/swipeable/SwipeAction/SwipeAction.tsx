import {StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';

const SwipeAction = ({x, action, sharedValue}: SwipeActionProps) => {
  const reanimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: interpolate(sharedValue.value, [0, 1], [x, 0])}],
      opacity: sharedValue.value,
    };
  });
  return (
    <Animated.View style={[styles.button, reanimatedStyles]}>
      {action}
    </Animated.View>
  );
};

export default SwipeAction;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    maxWidth: 45,
  },
});

type SwipeActionProps = {
  x: number;
  action: React.ReactNode;
  sharedValue: SharedValue<number>;
};
