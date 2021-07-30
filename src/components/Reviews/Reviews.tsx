import React from 'react';
import './Reviews.scss';
import Slider from "react-slick";
import Girl from '../../images/girl.png';

const Reviews = ({...props}) => {
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
                  <Slider {...settings}>
                    <li className="reviews-list__item">
                      <div className="review">
                        <div className="review__inner">
                          <div className="review__part review-photo">
                            <div className="review-photo__inner">
                              <img src={Girl} alt="Anna"/>
                              <i className="fas fa-quote-right"/>
                            </div>
                          </div>
                          <div className="review__part review-author">
                            <div className="review-author__name">
                              Kate Dennings
                            </div>
                            <div className="review-author__position">
                              Calligraphy Expert
                            </div>
                          </div>
                          <div className="review__part review-text">
                            <div className="review-text__inner">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                              viverra maecenas accumsan lacus vel facilisis.
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="reviews-list__item">
                      <div className="review">
                        <div className="review__inner">
                          <div className="review__part review-photo">
                            <div className="review-photo__inner">
                              <img src={Girl} alt="Anna"/>
                              <i className="fas fa-quote-right"/>
                            </div>
                          </div>
                          <div className="review__part review-author">
                            <div className="review-author__name">
                              Anna Karenina
                            </div>
                            <div className="review-author__position">
                              Fontend Expert
                            </div>
                          </div>
                          <div className="review__part review-text">
                            <div className="review-text__inner">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                              viverra maecenas accumsan lacus vel facilisis.
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="reviews-list__item">
                      <div className="review">
                        <div className="review__inner">
                          <div className="review__part review-photo">
                            <div className="review-photo__inner">
                              <img src={Girl} alt="Anna"/>
                              <i className="fas fa-quote-right"/>
                            </div>
                          </div>
                          <div className="review__part review-author">
                            <div className="review-author__name">
                              Kishko Yaryna
                            </div>
                            <div className="review-author__position">
                              Designer Expert
                            </div>
                          </div>
                          <div className="review__part review-text">
                            <div className="review-text__inner">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                              viverra maecenas accumsan lacus vel facilisis.
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </Slider>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Reviews;
