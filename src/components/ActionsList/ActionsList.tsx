import {View, Text, StyleSheet} from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import React from 'react';
import {DeleteButton, EditButton} from '../buttons';
import {SwipeAction} from '../SwipeAction';

const ActionsList = ({
  sharedValue,

  actions,
}: ActionsListProps) => {
  const deleteAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: interpolate(sharedValue.value, [0, 1], [0, 0])}],
      opacity: sharedValue.value,
    };
  });

  const editAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: interpolate(sharedValue.value, [0, 1], [60, 0])},
      ],
      opacity: sharedValue.value,
    };
  });

  return (
    // <>
    //   <Animated.View style={[styles.button, deleteAnimatedStyles]}>
    //     <DeleteButton onDelete={deleteAction} />
    //   </Animated.View>

    //   <Animated.View style={[styles.button, editAnimatedStyles]}>
    //     <EditButton onEdit={editAction} />
    //   </Animated.View>
    // </>
    <>
      {actions.map((action, i) => (
        <SwipeAction action={action} sharedValue={sharedValue} x={i * 60} />
      ))}
    </>
  );
};

type ActionsListProps = {
  sharedValue: SharedValue<number>;

  actions: React.ReactNode[];
};
export default ActionsList;
