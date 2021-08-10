import axios from 'axios';
import {getAllPokemons} from '../slices/pokemonSlice';
import {AppDispatch} from '../reducer/rootReducer';
import queryString from 'query-string';

export const getPokemons = (query: object) => (dispatch: AppDispatch) => {
  return new Promise<void>((resolve, reject) => {
    axios.get(` https://pokeapi.co/api/v2/pokemon/?limit=50${queryString.stringify(query)}`)
        .then(response => {
          dispatch(getAllPokemons({ pokemons: response.data.results }))
          resolve()
        })
        .catch(error => {
          console.log(error);
          reject()
        });
  });
};
