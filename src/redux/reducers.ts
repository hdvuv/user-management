import { combineReducers } from '@reduxjs/toolkit';
import createReducer from '../services/user/userSlice';

export const reducers = combineReducers({
    create: createReducer,
})
