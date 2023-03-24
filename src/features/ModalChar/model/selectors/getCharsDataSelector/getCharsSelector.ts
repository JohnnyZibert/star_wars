import { RootState } from 'src/app/providers/StoreProvider/config/store';

export const getCharsDataSelector = (state: RootState) => state.charsInfo.data.results;
