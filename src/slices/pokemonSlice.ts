import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';

export interface initialStateInterface {
  pokemons: object | null
}

export interface pokemonInterface {
  pokemons: AxiosResponse<object>
}

const initialState: initialStateInterface = {
  pokemons: null
};

export const slice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    getAllPokemons: (state, { payload }: PayloadAction<pokemonInterface>) => {
      state.pokemons = payload.pokemons;
    },
  }
});


export const { getAllPokemons} = slice.actions;

export default slice.reducer;
