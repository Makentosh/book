import React, {useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ScrollToTopButton from './ScrollToTopButton';
import SuccessModal from './SuccessModal';
import {useAppDispatch} from '../hooks/hooks';
import {getPokemons} from '../actions/pokemonActions';

const App = ({ ...props }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemons({}));

  }, [dispatch]);

  return (
      <>
        <Header/>
        <Main/>
        <Footer/>
        <ScrollToTopButton/>
        <SuccessModal/>
      </>
  );
};

export default App;
