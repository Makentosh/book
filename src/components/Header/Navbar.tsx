'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import generateImgPath from '../../utils/generateImgPath';

const Menu = dynamic(() => import('./Menu'), { ssr: false });

const Navbar = () => {
  const [fixed, setFixed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const offsetTopNumber = 150;

  let handleNavScroll = () => {
    ( document.body.scrollTop > offsetTopNumber || document.documentElement.scrollTop > offsetTopNumber)
        ? setFixed(true)
        : setFixed(false);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleNavScroll);

    if ( document.body.scrollTop > offsetTopNumber || document.documentElement.scrollTop > offsetTopNumber ) {
      setFixed(true)
    }
  }, []);

  useEffect(() => {
    if ( openDropdown ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [openDropdown]);

  let handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
      <>
        <div className={ `header__top section-navbar 
                    ${ fixed ? 'fixed' : '' }` }>
          <div className="section-navbar__inner">
            <div className="section-navbar__logo">
              <div className="section-navbar__logo-inner">
                <a href="/">
                  <img src={ generateImgPath('/images/logo.png') }
                       width={ 100 }
                       height={ 100 }
                       alt="Bukee"/>
                </a>
              </div>
            </div>
            <nav className="section-navbar__menu">
              <Menu/>
            </nav>

            <nav className="section-navbar__menu--mobile">
              <button className={ `burger burger__btn 
                            ${ openDropdown ? 'active' : '' }
                            ` }
                      onClick={ handleOpenDropdown }>
                <span className="burger__line line-one"/>
                <span className="burger__line line-second"/>
                <span className="burger__line line-three"/>
              </button>
            </nav>
          </div>
        </div>

        <div className={ `menu-mobile-overlay 
                        ${ openDropdown ? 'menu-mobile-overlay--show' : '' }` }
             onClick={ handleOpenDropdown }/>

        <Menu handleOpenDropdown={ handleOpenDropdown }
              className={ `menu-mobile ${ openDropdown ? 'show' : '' }` }/>
      </>
  );
};

export default Navbar;

