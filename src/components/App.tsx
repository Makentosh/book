import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ScrollToTopButton from './ScrollToTopButton';

const App = ({...props}) => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      <ScrollToTopButton/>
    </>
  );
}

export default App;
