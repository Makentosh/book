import React from 'react';
import './Events.scss';
import Button from '../Button';
import generateImgPath from '../../utils/generateImgPath';

const EVENTS = [
  {
    date: 'October 21, 2024',
    location: 'Book signing - San francisco, CA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspen disse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
  },
  {
    date: 'November 23, 2024',
    location: 'Book reading - Los Angeles, CA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspen disse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
  },
];

const Events = () => {
  return (
      <section className="section-events">
        <div className="section-events__inner">
          <div className="container section-events__container">
            <div className="section-events__content">
              <div className="section-events__left section-events-photo">
                <div className="section-events-photo__inner">
                  <img src={ generateImgPath('/images/woman.jpg') }
                       width={ 100 }
                       height={ 100 }
                       alt="Emma"/>
                </div>
              </div>
              <div className="section-events__right section-events-upcoming">
                <div className="section-events-upcoming__inner">
                  <div className="section-events-upcoming__author">
                    <div className="section-events-upcoming__author-inner">
                      - Emma Anderson
                    </div>
                  </div>
                  <div className="section-events-upcoming__title-wrap">
                    <div className="section-events-upcoming__title">
                      Upcoming Events
                    </div>
                    <div className="section-events-upcoming__subtitle">
                      Some upcoming events you might be interested in
                    </div>
                  </div>
                </div>
                <ul className="event-list">
                  { EVENTS.map((event) => (
                      <li className="event-list__item"
                          key={ event.date }>
                        <div className="event">
                          <div className="event__inner">
                            <div className="event__part event-location">
                              <div className="event-location__date">
                                { event.date }
                              </div>
                              <div className="event-location__city">
                                { event.location }
                              </div>
                            </div>
                            <div className="event__part event-text">
                              <div className="event-text__inner">
                                { event.description }
                              </div>
                            </div>
                            <div className="event__part event-register">
                              <Button className="event-register__btn"
                                      title="Register"/>
                            </div>
                          </div>
                        </div>
                      </li>
                  )) }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Events;
