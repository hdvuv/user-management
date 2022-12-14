import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { userApi } from '../../services/user/userApi';
import { adminApi } from '../../services/admin/adminApi';
import UserSlice from '../../services/user/userSlice';

/**
 * Configure store
 */
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: UserSlice,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware).concat(adminApi.middleware),
});

setupListeners(store.dispatch);

/**
 * Export useSelector() function
 */
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Export useDispatch() function
 */
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
