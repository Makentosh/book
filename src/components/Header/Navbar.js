import React, {useEffect, useState} from 'react';
import Logo from '../../images/logo.png';
import Menu from './Menu';

const Navbar = ({...props}) => {
  const [fixed, setFixed] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const offsetTopNumber = 150;

  let handleNavScroll = () => {
    (document.body.scrollTop > offsetTopNumber || document.documentElement.scrollTop > offsetTopNumber)
        ? setFixed(true)
        : setFixed(false)
  }


  useEffect(() => {
    window.addEventListener('scroll', handleNavScroll)
  }, [])

  let handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  return (
      <div className={`header__top section-navbar 
                    ${fixed ? 'fixed' : ''}`}>
        <div className="section-navbar__logo">
          <div className="section-navbar__logo-inner">
            <a href="/">
              <img src={Logo} alt="Bukee"/>
            </a>
          </div>
        </div>
        <nav className="section-navbar__menu">
          <Menu/>
        </nav>

        <nav className="section-navbar__menu--mobile">
          <div className={`burger burger__btn 
                            ${openDropdown ? 'active' : ''}
                            `}
                    onClick={handleOpenDropdown}>
            <span className="burger__line line-one"/>
            <span className="burger__line line-second"/>
            <span className="burger__line line-three"/>
          </div>
          <Menu className={`menu-mobile ${openDropdown ? 'show' : ''}`}/>

        </nav>
      </div>
  )
}

export default Navbar;

