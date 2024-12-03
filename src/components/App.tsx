import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ScrollToTopButton from './ScrollToTopButton';
import SuccessModal from './SuccessModal';

const App = () => {

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
