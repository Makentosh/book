'use client';
import React from 'react';
import Button from '../Button';
import generateImgPath from '../../utils/generateImgPath';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const SectionOffer = ({ ...props }) => {
  if ( typeof window !== 'undefined' ) {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }



  return (
      <div className="header__bottom section-offer">
        <div className="section-offer__inner">
          <div className="section-offer-img">
            <div className="section-offer-img__wrap">
              <img src={ generateImgPath('/images/main-book.png') }
                   width={ 100 }
                   className={ 'offer-image hidden' }
                   height={ 100 }
                   alt="Good book"/>
            </div>
          </div>
          <div className="offer">
            <div className="offer__inner">
              <div className="offer__part offer__author hidden">
                - By Emma Anderson
              </div>
              <div className="offer__part offer__title-wrap">
                <div className="offer__title hidden">
                  Bukee: The Book
                </div>
                <div className="offer__subtitle hidden">
                  A room without books is like a body without a soul
                </div>
              </div>
              <div className="offer__part offer__text hidden">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </div>
              <div className="offer__part offer__text hidden">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut
              </div>
              <div className="offer__part offer__price">

                <Button className="offer__btn hidden"
                        title="Buy this book - $15.00"/>
              </div>
              <div className="offer__part offer__btn-subtext hidden">
                <p className="btn-subtext">* Some conditions may applicable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SectionOffer;
