'use client';
import { Provider } from 'react-redux';
import store from '../src/reducer/rootReducer';

export default function StoreProvider ({ children }: { children: any }) {

  return <Provider store={ store }>{ children }</Provider>;
}
