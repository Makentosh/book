import React from 'react'
import './Header.scss'
import Navbar from './Navbar';
import SectionOffer from './SectionOffer';


const Header = ({...props}) => {
  return (
      <header className="header" id="header">
        <div className="header__inner">
          <div className="header__container container">
            <div className="header__content">
              <Navbar/>
              <SectionOffer/>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header;
