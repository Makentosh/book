import React from 'react';
import Author from '../Sections/Author';
import BookContent from '../Sections/BookContent';
import Books from '../Sections/Books';
import Reviews from '../Sections/Reviews';
import Events from '../Sections/Events';
import Blog from '../Sections/Blog';
import NewLetter from '../Sections/NewsLetter';

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
