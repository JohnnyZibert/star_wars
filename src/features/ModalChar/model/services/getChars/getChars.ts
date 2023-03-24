import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'src/shared/api/api';
import { IGetCharResponse } from '../../types/CharsStateSchema';

interface ParamRequest {
    currentPage: number
    setCurrentPage: (p: (prev: number) => number) => void
    setFetching:(fetching: boolean)=> void
}

export const getCharsRequest = createAsyncThunk(
    'getCharsSlice/getCharsRequest',
    async ({
        currentPage, setCurrentPage, setFetching,
    }:ParamRequest, { rejectWithValue }) => {
        try {
            const response = await instance.get<IGetCharResponse>(`people?page=${currentPage}&pageSize=${9}`);
            setCurrentPage((prev) => prev + 1);

            if (!response.data) {
                throw new Error();
            }
            return { results: response.data.results, count: response.data.count };
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        } finally {
            setFetching(false);
        }
    },
);
