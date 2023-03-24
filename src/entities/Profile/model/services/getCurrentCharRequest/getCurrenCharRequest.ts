import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCurrenCharRequest = createAsyncThunk(
    'getCurrentCharsSlice/getCurrenCharRequest',
    async (url:string, { rejectWithValue }) => {
        try {
            const response = await axios.get(url);

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
