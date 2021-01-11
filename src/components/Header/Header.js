import React from 'react'
import './Header.scss'
import Logo from '../../images/logo.png'
import MainBook from '../../images/main-book.png'
import {ScrollTo} from '../Tools';


const Header = ({...props}) => {
  return (
      <header className="header" id="header">
        <div className="header__inner">
          <div className="header__container container">
            <div className="header__content">
              <div className="header__top section-navbar">
                <div className="section-navbar__logo">
                  <div className="section-navbar__logo-inner">
                    <a href="/">
                      <img src={Logo} alt="Bukee"/>
                    </a>
                  </div>
                </div>
                <nav className="section-navbar__menu">
                  <ul className="menu">
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#header')}
                              className="menu__link">
                        Home
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#about')}
                              className="menu__link">
                        About
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#content')}
                              className="menu__link">
                        Contents
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#books')}
                              className="menu__link">
                        Books
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#education')}
                              className="menu__link">
                        Education
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#skills')}
                              className="menu__link">
                        Skills
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#portfolio')}
                              className="menu__link">
                        Portfolio
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#clients')}
                              className="menu__link">
                        Clients
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#subscribe')}
                              className="menu__link">Contact
                      </button>
                    </li>
                  </ul>
                </nav>
                <nav className="section-navbar__menu--mobile burger">
                  <div className="burger__btn js-burger">
                    <span className="burger__line line-one"/>
                    <span className="burger__line line-second"/>
                    <span className="burger__line line-three"/>
                  </div>
                  <ul className="menu menu-mobile js-mobile-menu">
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#header')}
                              className="menu__link">
                        Home
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#about')}
                              className="menu__link">
                        About
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#content')}
                              className="menu__link">
                        Contents
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#books')}
                              className="menu__link">
                        Books
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#education')}
                              className="menu__link">
                        Education
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#skills')}
                              className="menu__link">
                        Skills
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#portfolio')}
                              className="menu__link">
                        Portfolio
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#clients')}
                              className="menu__link">
                        Clients
                      </button>
                    </li>
                    <li className="menu__item">
                      <button onClick={() => ScrollTo('#contact')}
                              className="menu__link">
                        Contact
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header__bottom section-offer">
                <div className="section-offer__inner">
                  <div className="section-offer-img">
                    <div className="section-offer-img__wrap">
                      <img src={MainBook} alt="Good book"/>
                    </div>
                  </div>
                  <div className="offer">
                    <div className="offer__inner">
                      <div className="offer__part offer__author">
                        - By Emma Anderson
                      </div>
                      <div className="offer__part offer__title-wrap">
                        <div className="offer__title">
                          Bukee: The Book
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
                        <button href="#" className="btn offer__btn">
                          Buy this book - $15.00
                          <span/>
                          <span/>
                          <span/>
                          <span/>
                        </button>
                      </div>
                      <div className="offer__part offer__btn-subtext">
                        <p className="btn-subtext">* Some conditions may applicable</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header;
