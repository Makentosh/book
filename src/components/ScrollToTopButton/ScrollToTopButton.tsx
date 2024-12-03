"use client"
import React from 'react';
import './ScrollToTopButton.scss';

const ScrollToTopButton = ({ ...props }) => {

  let scrollToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
      <>
        <button className={ `to-top btn ` }
                onClick={ scrollToTop }>
          <i className="fas fa-arrow-up"/>
        </button>
      </>
  );
};

export default ScrollToTopButton;
