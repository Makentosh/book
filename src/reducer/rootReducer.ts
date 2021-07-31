import {configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import modalReducer from '../slices/modalSlice';

const store = configureStore({
    reducer: {
        modal: modalReducer
    },
    devTools: true
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>


export default store;
