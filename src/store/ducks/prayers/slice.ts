import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PrayersResponseDto, PrayersUpdateDto} from '../../../types';
import {Statuses} from '../../../constants';
import {PrayersRequestDto} from '../../../types/models/PrayersRequestDto';

const initialState: PrayersSliceType = {
  prayers: [],
  requestProgress: Statuses.IDLE,
  // error: false,
  showAnsweredPrayersList: false,
};

type PrayersSliceType = {
  prayers: PrayersResponseDto[];
  requestProgress: Statuses;
  // error: boolean;
  showAnsweredPrayersList: boolean;
};

const {actions, reducer} = createSlice({
  name: 'prayers',
  initialState,
  reducers: {
    requestGetPrayers: state => {
      state.requestProgress = Statuses.PENDING;
    },
    getPrayersFulfilled: (
      state,
      {payload}: PayloadAction<PrayersResponseDto[]>,
    ) => {
      state.prayers = payload;
      state.requestProgress = Statuses.SUCCEEDED;
      // state.error = false;
    },
    getPrayersRejected: (state, {payload}) => {
      // state.error = payload && true;
      state.requestProgress = Statuses.FAILED;
    },

    requestAddPrayer: (state, {payload}: PayloadAction<PrayersRequestDto>) => {
      state.requestProgress = Statuses.PENDING;
    },
    addPrayerFulfilled: (
      state,
      {payload}: PayloadAction<PrayersResponseDto>,
    ) => {
      state.prayers.push(payload);
      state.requestProgress = Statuses.SUCCEEDED;
      // state.error = false;
    },
    addPrayerRejected: (state, {payload}) => {
      // state.error = payload;
      state.requestProgress = Statuses.FAILED;
    },

    requestDeletePrayer: (state, {payload}: PayloadAction<number>) => {
      state.requestProgress = Statuses.PENDING;
    },
    deletePrayerFulfilled: (state, {payload}: PayloadAction<number>) => {
      state.prayers = state.prayers.filter(prayer => prayer.id !== payload);
      state.requestProgress = Statuses.SUCCEEDED;
      // state.error = false;
    },
    deletePrayerRejected: (state, {payload}) => {
      // state.error = payload;
      state.requestProgress = Statuses.FAILED;
    },

    requestUpdatePrayer: (
      state,
      {payload}: PayloadAction<PrayersUpdateDto>,
    ) => {
      state.requestProgress = Statuses.PENDING;
    },
    updatePrayerFulfilled: (
      state,
      {payload}: PayloadAction<PrayersUpdateDto>,
    ) => {
      state.prayers = state.prayers.map(prayer => {
        if (payload.id === prayer.id) {
          return payload.data;
        }
        return prayer;
      });

      state.requestProgress = Statuses.SUCCEEDED;
      // state.error = false;
    },
    updatePrayerRejected: (state, {payload}) => {
      // state.error = payload;
      state.requestProgress = Statuses.FAILED;
    },

    toggleShowAnsweredPrayersList: state => {
      state.showAnsweredPrayersList = !state.showAnsweredPrayersList;
    },
  },
});

export const {
  requestGetPrayers,
  getPrayersFulfilled,
  getPrayersRejected,
  requestAddPrayer,
  requestDeletePrayer,
  addPrayerFulfilled,
  addPrayerRejected,
  deletePrayerFulfilled,
  deletePrayerRejected,
  requestUpdatePrayer,
  updatePrayerFulfilled,
  updatePrayerRejected,
  toggleShowAnsweredPrayersList,
} = actions;
export const prayersReducer = reducer;
