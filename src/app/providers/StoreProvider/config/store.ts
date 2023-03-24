import { configureStore } from '@reduxjs/toolkit';
import { getCharsReducer } from 'src/features/ModalChar/model/slice/getCharsSlice';
import { currentCharsReducer } from 'src/entities/Profile/model/slices/currenCharSlice';

export const store = configureStore({
    reducer: {
        charsInfo: getCharsReducer,
        currentChar: currentCharsReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the StoreProvider itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
