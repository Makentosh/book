import React from 'react';
import Blog from '../Blog';
import Reviews from '../Reviews';
import Books from '../Books';
import BookContent from '../BookContent';
import Author from '../Author/Author';
import NewLetter from '../NewsLetter';
import Events from '../Events';


const Main = ({...props}) => {
  return (
      <main className="content">
        <Author/>
        <BookContent/>
        <Books/>
        <Reviews/>
        <Events/>
        <Blog/>
        <NewLetter/>
      </main>
  )
}

export default Main;
