import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersSlice from './reducer/users';

const rootReducer = combineReducers({
    usersSlice
});

export const Store = () => {
    return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof Store>;
export type AppDispatch = AppStore['dispatch'];
