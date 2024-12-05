'use client';
import React from 'react';
import './Reviews.scss';
import Slider from 'react-slick';
import generateImgPath from '../../utils/generateImgPath';

const REVIEW_USERS = [
  {
    imgSrc: generateImgPath('/images/girl-1.jpg'),
    fullName: 'Kate Dennings',
    position: 'Calligraphy Expert',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
  },
  {
    imgSrc: generateImgPath('/images/girl-2.jpg'),
    fullName: 'Anna Karenina',
    position: 'Frontend Expert',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
  },
  {
    imgSrc: generateImgPath('/images/girl-3.png'),
    fullName: 'Kishko Yaryna',
    position: 'Designer Expert',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
  }
];

const Reviews = () => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slideToShow: 1,
    slideToScroll: 1,
    fade: true,
    speed: 300,
    autoplaySpeed: 1500,
    cssEase: 'linear',
    arrows: false
  };

  return (
      <section className="section-reviews">
        <div className="section-reviews__inner">
          <div className="container section-reviews__container">
            <div className="section-reviews__content">
              <div className="section-reviews__list reviews-list-wrap">
                <ul className="reviews-list">
                  <Slider { ...settings }>
                    { REVIEW_USERS.map((user) => (
                        <li className="reviews-list__item"
                            key={ user.fullName }>
                          <div className="review">
                            <div className="review__inner">
                              <div className="review__part review-photo">
                                <div className="review-photo__inner">
                                  <img src={ user.imgSrc }
                                       width={ 150 }
                                       height={ 150 }
                                       alt={ user.fullName }/>
                                  <i className="fas fa-quote-right"/>
                                </div>
                              </div>
                              <div className="review__part review-author">
                                <div className="review-author__name">
                                  { user.fullName }
                                </div>
                                <div className="review-author__position">
                                  { user.position }
                                </div>
                              </div>
                              <div className="review__part review-text">
                                <div className="review-text__inner">
                                  { user.text }
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                    )) }
                  </Slider>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Reviews;
