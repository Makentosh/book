import {configureStore} from '@reduxjs/toolkit';
import modalReducer from '../slices/modalSlice';
import pokemonsReducer from '../slices/pokemonSlice';
// import {useDispatch} from 'react-redux';

const store = configureStore({
    reducer: {
        modal: modalReducer,
        pokemons: pokemonsReducer
    },
    devTools: true
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>


export default store;
