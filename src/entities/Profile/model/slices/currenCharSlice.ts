import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Char } from 'src/features/ModalChar';
import { StateType } from 'src/features/ModalChar/model/types/CharsStateSchema';
import { getCurrenCharRequest } from '../services/getCurrentCharRequest/getCurrenCharRequest';

const initialState: StateType<Char> = {
    isLoading: false,
    data: {
        name: '',
        height: '',
        mass: '',
        created: '',
        hair_color: '',
        gender: '',
        eye_color: '',
        birth_year: '',
        skin_color: '',
        url: '',
    },
    error: null,
};

export const getCurrentCharsSlice = createSlice({
    name: 'getCurrentCharsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCurrenCharRequest.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(getCurrenCharRequest.fulfilled, (state, { payload }:PayloadAction<Char>) => {
                state.data = payload;
                state.isLoading = false;
            })
            .addCase(getCurrenCharRequest.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload as string;
            });
    },
});

export const { actions: currentCharsActions } = getCurrentCharsSlice;
export const { reducer: currentCharsReducer } = getCurrentCharsSlice;
