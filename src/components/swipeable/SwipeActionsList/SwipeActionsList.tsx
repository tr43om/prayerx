import {SharedValue} from 'react-native-reanimated';
import React from 'react';
import {SwipeAction} from '../SwipeAction';

const SwipeActionsList = ({
  sharedValue,

  actions,
}: SwipeActionsListProps) => {
  return (
    <>
      {actions.map((action, i) => (
        <SwipeAction action={action} sharedValue={sharedValue} x={i * 60} />
      ))}
    </>
  );
};

type SwipeActionsListProps = {
  sharedValue: SharedValue<number>;
  actions: React.ReactNode[];
};
export default SwipeActionsList;
