import { RootState } from 'src/app/providers/StoreProvider/config/store';

export const IsLoadingDataChars = (state: RootState) => state.charsInfo.isLoading;
