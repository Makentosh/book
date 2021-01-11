import React from 'react';
import Emma from '../../images/emma.jpg'

const Author = () => {
  return (
      <section className="section-author" id="portfolio">
        <div className="section-author__inner">
          <div className="container section-author__container">
            <div className="section-author__content">
              <div className="section-author__content-top">
                <div className="section-author__left section-offer">
                  <div className="offer">
                    <div className="offer__inner">
                      <div className="offer__part offer__author">
                        - Book Author
                      </div>
                      <div className="offer__part offer__title-wrap">
                        <div className="offer__title">
                          Emma Anderson
                        </div>
                        <div className="offer__subtitle">
                          A room without books is like a body without a soul
                        </div>
                      </div>
                      <div className="offer__part offer__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                      <div className="offer__part offer__text">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Sed ut
                      </div>
                      <div className="offer__part offer__price">
                        <a href="http://google.com.ua" className="btn offer__btn">
                          Read full biography
                          <span/>
                          <span/>
                          <span/>
                          <span/>
                        </a>
                      </div>
                      <div className="offer__part offer__btn-subtext">
                        <p className="btn-subtext">* Some conditions may applicable</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-author__right section-photo">
                  <div className="section-photo__inner">
                    <img src={Emma} alt="Emma" className="section-photo__image"/>
                  </div>
                </div>
              </div>
              <div className="section-author__content-bottom">
                <div className="section-statistic">
                  <div className="section-statistic__inner">
                    <ul className="statistic-list">
                      <li className="statistic-list__item">
                        <div className="statistic">
                          <div className="statistic__inner">
                            <div className="statistic__part">
                              <div className="statistic__number">
                                12
                              </div>
                            </div>
                            <div className="statistic__part">
                              <div className="statistic__text">
                                Total published books
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="statistic-list__item">
                        <div className="statistic">
                          <div className="statistic__inner">
                            <div className="statistic__part">
                              <div className="statistic__number">
                                5
                              </div>
                            </div>
                            <div className="statistic__part">
                              <div className="statistic__text">
                                Happy readers
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="statistic-list__item">
                        <div className="statistic">
                          <div className="statistic__inner">
                            <div className="statistic__part">
                              <div className="statistic__number">
                                15,000
                              </div>
                            </div>
                            <div className="statistic__part">
                              <div className="statistic__text">
                                Happy readers
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Author;
