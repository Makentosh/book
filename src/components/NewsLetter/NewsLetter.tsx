import React from 'react';
import './NewsLetter.scss';
import NewsLetterForm from './NewsLetterForm';

const NewLetter = () => {
  return (
      <section className="section-newsletter" id="subscribe">
        <div className="section-newsletter__inner">
          <div className="container section-newsletter__container">
            <div className="section-newsletter__content">
              <div className="section-newsletter__left newsletter">
                <div className="newsletter__title-wrap">
                  <div className="newsletter__title">
                    Join Newsletter
                  </div>
                  <div className="newsletter__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Quis ipsum suspen disse ultrices gravida. Risus commodo viverra
                    maecenas accumsan lacus vel facilisis.
                  </div>
                </div>
              </div>
              <div className="section-newsletter__right subscribe">
                <NewsLetterForm/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default NewLetter;
