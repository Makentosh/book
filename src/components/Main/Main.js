import React from 'react';
import Author from '../Author/Author';
import BookContent from '../BookContent/BookContent';
import Books from '../Books/Books';
import Reviews from '../Reviews/Reviews';
import Events from '../Events/Events';
import Blog from '../Blog/Blog';
import NewLetter from '../NewsLetter/NewsLetter';

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
