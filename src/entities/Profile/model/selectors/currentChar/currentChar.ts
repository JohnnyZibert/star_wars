import { RootState } from 'src/app/providers/StoreProvider/config/store';

export const getCurrentCharsSelector = (state: RootState) => state.currentChar.data;
