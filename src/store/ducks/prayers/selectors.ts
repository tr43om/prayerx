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

const selectIdForPrayers = (state: RootState, columnId: number) => columnId;

export const selectPrayersById = createSelector(
  [selectPrayers, selectIdForPrayers],
  (prayers: PrayersResponseDto[], prayerId) => {
    return prayers.filter(prayer => prayer.columnId === prayerId);
  },
);

const selectIdForPrayer = (state: RootState, prayerId: number) => prayerId;

export const selectPrayerById = createSelector(
  [selectPrayers, selectIdForPrayer],
  (prayers: PrayersResponseDto[], prayerId) => {
    return prayers.filter(prayer => prayer.id === prayerId)[0];
  },
);

export const selectAnsweredPrayersVisibility = createSelector(
  ({prayers: {showAnsweredPrayersList}}: RootState) => showAnsweredPrayersList,
  showAnsweredPrayersList => showAnsweredPrayersList,
);
