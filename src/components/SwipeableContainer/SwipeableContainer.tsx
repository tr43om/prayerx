import {View, Text} from 'react-native';
import React, {Ref, useRef} from 'react';
import {PropsWithChildren} from 'react';
import Animated, {
  Layout,
  LightSpeedInRight,
  StretchOutY,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {RectButton, Swipeable} from 'react-native-gesture-handler';
import {ActionsList} from '../ActionsList';
import {SwipeAction} from '../SwipeAction';
import {DeleteButton} from '../buttons';

const SwipeableContainer = ({
  children,
  rightActions,
  swipeRef,
}: SwipeableContainerProps) => {
  const shared = useSharedValue(0);

  return (
    <Animated.View
      layout={Layout.springify().duration(1000)}
      entering={LightSpeedInRight.duration(500).springify()}
      exiting={StretchOutY}>
      <Swipeable
        ref={swipeRef}
        onSwipeableWillOpen={() => (shared.value = withSpring(1))}
        onSwipeableWillClose={() => (shared.value = withSpring(0))}
        renderRightActions={() => (
          <ActionsList sharedValue={shared} actions={rightActions} />
        )}>
        {children}
      </Swipeable>
    </Animated.View>
  );
};

type SwipeableContainerProps = PropsWithChildren<{
  rightActions: React.ReactNode[];
  swipeRef: Ref<Swipeable>;
}>;

export default SwipeableContainer;
