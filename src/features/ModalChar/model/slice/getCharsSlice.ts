import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCharsRequest } from 'src/features/ModalChar';
import { IGetCharResponse, StateType } from '../types/CharsStateSchema';

const initialState: StateType<IGetCharResponse> = {
    isLoading: false,
    data: {
        results: [],
        count: 1,
    },
    error: null,
};

export const getCharsSlice = createSlice({
    name: 'getCharsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCharsRequest.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(getCharsRequest.fulfilled, (state, { payload }:PayloadAction<IGetCharResponse>) => {
                state.data.results = [...state.data.results, ...payload.results];
                state.data.count = payload.count;
                state.isLoading = false;
            })
            .addCase(getCharsRequest.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload as string;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: getCharsActions } = getCharsSlice;
export const { reducer: getCharsReducer } = getCharsSlice;
