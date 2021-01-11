import React from 'react';
import BookOne from '../../images/book-one.png'
import BookSecond from '../../images/book-second.png'
import BookThree from '../../images/book-three.png'

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
                          <img src={BookOne} alt="Inception"/>
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
                          <img src={BookSecond} alt="Inception"/>
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
                          <img src={BookThree} alt="Inception"/>
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
                  <button className="btn btn-all">
                    Browse All Books
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Books;
