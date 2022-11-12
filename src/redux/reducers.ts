import { combineReducers } from '@reduxjs/toolkit';
import createReducer from '../services/userSlice';

export const reducers = combineReducers({
    create: createReducer,
})
