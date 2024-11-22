"use client"

import React, {useEffect, useState} from 'react';
import './ScrollToTopButton.scss';

const ScrollToTopButton = ({...props}) => {
  const [view, setView] = useState(false)
  const offsetTopNumber: number = 150;

  let handleScroll = () => {
    (document.body.scrollTop > offsetTopNumber || document.documentElement.scrollTop > offsetTopNumber)
        ? setView(true)
        : setView(false)
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  let scrollToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
    })
  }

  return (
      <>
        <button className={`to-top btn
                            ${view ? 'active' : ''}
                            `}
                        onClick={scrollToTop}>
          <i className="fas fa-arrow-up"/>
        </button>
      </>
  )
}

export default ScrollToTopButton;
