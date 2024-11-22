import React from 'react';
import './Books.scss';
import Button from '../Button';


const Books = () => {
  return (
      <section className="section-books" id="books">
        <div className="section-books__inner">
          <div className="container section-books__container">
            <div className="section-books__content">
              <div className="section-books__title-wrap">
                <div className="section-books__title">
                  <div className="section-books__title">
                    Other Books
                  </div>
                  <div className="section-books__subtitle">
                    Some books you might be interested in
                  </div>
                </div>
              </div>
              <div className="section-books section-books__list">
                <ul className="books-list">
                  <li className="books-list__item">
                    <div className="book">
                      <div className="book__inner">
                        <div className="book__part book-image">
                          <img src={ '/images/book-one.png' } width={ 100 }
                               height={ 100 } alt="Inception"/>
                        </div>
                        <div className="book__part book__description">
                          <div className="book-description__title">
                            Inception
                          </div>
                          <div className="book-description__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore
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
                  <li className="books-list__item">
                    <div className="book">
                      <div className="book__inner">
                        <div className="book__part book-image">
                          <img src={ '/images/book-second.png' } width={ 100 }
                               height={ 100 } alt="Inception"/>
                        </div>
                        <div className="book__part book-description">
                          <div className="book-description__title">
                            Fight Club
                          </div>
                          <div className="book-description__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore
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
                  <li className="books-list__item">
                    <div className="book">
                      <div className="book__inner">
                        <div className="book__part book-image">
                          <img src={ '/images/book-three.png' } width={ 100 }
                               height={ 100 } alt="Inception"/>
                        </div>
                        <div className="book__part book-description">
                          <div className="book-description__title">
                            Daredevils
                          </div>
                          <div className="book-description__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore
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
