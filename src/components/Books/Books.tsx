import React from 'react';
import './Books.scss';
import Button from '../Button';
import generateImgPath from '../../utils/generateImgPath';


const BOOKS = [
  {
    name: 'Inception',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    imgSrc: generateImgPath('/images/book-one.png'),
  },
  {
    name: 'Fight Club',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    imgSrc: generateImgPath('/images/book-second.png'),
  },
  {
    name: 'Daredevils',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    imgSrc: generateImgPath('/images/book-three.png'),
  },
];

const Books = () => {
  return (
      <section className="section-books" id="books">
        <div className="section-books__inner">
          <div className="container section-books__container">
            <div className="section-books__content">
              <div className="section-books__title-wrap">
                <div className="section-books__title">
                  Other Books
                </div>
                <div className="section-books__subtitle">
                  Some books you might be interested in
                </div>
              </div>
              <div className="section-books section-books__list">
              <ul className="books-list">
                  {BOOKS.map((book) => (
                      <li className="books-list__item"
                          key={book.name}>
                        <div className="book">
                          <div className="book__inner">
                            <div className="book__part book-image">
                              <img src={ book.imgSrc }
                                   width={ 100 }
                                   height={ 100 }
                                   alt={book.name} />
                            </div>
                            <div className="book__part book__description">
                              <div className="book-description__title">
                                {book.name}
                              </div>
                              <div className="book-description__text">
                                {book.description}
                              </div>
                            </div>
                            <div className="book__part book-btn">
                              <button className="book-btn__link">
                                Read More
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                  )) }

                </ul>
                <div className="section-books__btn">
                  <Button className="btn-all"
                          title="Browse All Books"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Books;
