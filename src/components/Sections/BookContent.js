import React from 'react';

const BookContent = () => {
  return (
      <section className="section-book-content" id="content">
        <div className="section-book-content__inner">
          <div className="container section-book-content__container">
            <div className="section-book-content__content">
              <div className="section-book-content__title-wrap">
                <div className="section-book-content__title">
                  Book Contents
                </div>
                <div className="section-book-content__subtitle">
                  Let’s see what we have covered in the book
                </div>
              </div>
              <div className="section-book-content__wrapper">
                <div className="about">
                  <div className="about__inner">
                    <div className="about__part">
                      <div className="about__title">
                        About the book
                      </div>
                    </div>
                    <div className="about__part">
                      <div className="about__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna ali qua. Ut enim ad minim veniam, quis nostrud exercitation ull amco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillu m dolore eu fugiat nulla pariatur.
                      </div>
                    </div>
                    <div className="about__part">
                      <div className="social">
                        <div className="social__inner">
                          <div className="social__text">
                            Featured in:
                          </div>
                          <div className="social__list social-list">
                            <li className="social-list__item">
                              <a href="http://google.com.ua" className="social-list__link">
                                <i className="fab fa-vuejs"/>
                              </a>
                            </li>
                            <li className="social-list__item">
                              <a href="http://google.com.ua" className="social-list__link">
                                <i className="fab fa-amazon"/>
                              </a>
                            </li>
                            <li className="social-list__item">
                              <a href="http://google.com.ua" className="social-list__link">
                                <i className="fab fa-sass"/>
                              </a>
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table">
                  <div className="table__inner">
                    <div className="table__part">
                      <div className="table__title">
                        Table of contents
                      </div>
                    </div>
                    <div className="table__part table-lists">
                      <div className="table-lists__inner">
                        <ol className="table-list">
                          <li className="table-list__item">
                            1. Lorem ipsum dolor sit amet
                          </li>
                          <li className="table-list__item">
                            2. Consectetur adipisicing elit
                          </li>
                          <li className="table-list__item">
                            3. Labore et dolore magna
                          </li>
                          <li className="table-list__item">
                            4. Consectetur adipisicing elit
                          </li>
                          <li className="table-list__item">
                            5. Labore et dolore magna
                          </li>
                        </ol>
                        <ol className="table-list">
                          <li className="table-list__item">
                            6. Lorem ipsum dolor sit amet
                          </li>
                          <li className="table-list__item">
                            7. Consectetur adipisicing elit
                          </li>
                          <li className="table-list__item">
                            8. Labore et dolore magna
                          </li>
                          <li className="table-list__item">
                            9. Consectetur adipisicing elit
                          </li>
                          <li className="table-list__item">
                            10. Labore et dolore magna
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div className="table__part">
                      <button className="btn table__btn">
                        More
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
          </div>
        </div>
      </section>
  )
}

export default BookContent;
