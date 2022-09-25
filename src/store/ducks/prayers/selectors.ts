import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {PrayersResponseDto} from '../../../types/models/PrayersResponseDto';

export const selectPrayers = createSelector(
  ({prayers: {prayers}}: RootState) => prayers,
  prayers => prayers,
);

export const selectPrayerRequestProgress = createSelector(
  ({prayers: {requestProgress}}: RootState) => requestProgress,
  requestProgress => requestProgress,
);

const selectId = (state: RootState, columnId: number) => columnId;

export const selectPrayersById = createSelector(
  [selectPrayers, selectId],
  (prayers: PrayersResponseDto[], subscriptionId) => {
    return prayers.filter(prayer => prayer.columnId === subscriptionId);
  },
);
