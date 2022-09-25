import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PrayersResponseDto} from '../../../types';
import {Statuses} from '../../../constants';
import {PrayersRequestDto} from '../../../types/models/PrayersRequestDto';

const initialState: PrayersSliceType = {
  prayers: [],
  requestProgress: Statuses.IDLE,
  error: false,
  creatingNewPrayer: true,
};

type PrayersSliceType = {
  prayers: PrayersResponseDto[];
  requestProgress: Statuses;
  error: boolean;
  creatingNewPrayer: boolean;
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
      state.prayers = payload.reverse();
      state.requestProgress = Statuses.SUCCEEDED;
      state.error = false;
    },
    getPrayersRejected: (state, {payload}) => {
      state.error = payload;
      state.requestProgress = Statuses.FAILED;
    },

    requestAddPrayer: (state, {payload}: PayloadAction<PrayersRequestDto>) => {
      state.requestProgress = Statuses.PENDING;
    },
    addPrayerFulfilled: (
      state,
      {payload}: PayloadAction<PrayersResponseDto>,
    ) => {
      state.prayers = [payload, ...state.prayers];
      state.requestProgress = Statuses.SUCCEEDED;
      state.error = false;
    },
    addPrayerRejected: (state, {payload}) => {
      state.error = payload;
      state.requestProgress = Statuses.FAILED;
    },

    toggleCreatePrayerModal: state => {
      state.creatingNewPrayer = !state.creatingNewPrayer;
    },

    requestDeletePrayer: (state, {payload}: PayloadAction<number>) => {
      state.requestProgress = Statuses.PENDING;
    },
    deletePrayerFulfilled: (state, {payload}: PayloadAction<number>) => {
      state.prayers = state.prayers.filter(prayer => prayer.id !== payload);
      state.requestProgress = Statuses.SUCCEEDED;
      state.error = false;
    },
    deletePrayerRejected: (state, {payload}) => {
      state.error = payload;
      state.requestProgress = Statuses.FAILED;
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
  toggleCreatePrayerModal,
} = actions;
export const prayersReducer = reducer;
