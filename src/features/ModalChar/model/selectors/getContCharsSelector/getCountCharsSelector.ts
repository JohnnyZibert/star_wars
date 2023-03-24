import { RootState } from 'src/app/providers/StoreProvider/config/store';

export const countCharsSelector = (state: RootState) => state.charsInfo.data.count;
