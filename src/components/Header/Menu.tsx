import React from 'react';
import { scrollToAnchor } from '../Tools';

const menu = [
  { title: 'Home', hash: '#header' },
  { title: 'About', hash: '#about' },
  { title: 'Contents', hash: '#content' },
  { title: 'Books', hash: '#books' },
  { title: 'Education', hash: '#education' },
  { title: 'Skills', hash: '#skills' },
  { title: 'Portfolio', hash: '#portfolio' },
  { title: 'Clients', hash: '#clients' },
  { title: 'Contact', hash: '#subscribe' },
];


type MenuItemT = {
  title: string
  hash: string
  handleOpenDropdown?: () => void
}

const MenuItem: React.FC<MenuItemT> = ({ title, hash, handleOpenDropdown, ...props }) => {
  let handleClick = () => {
    scrollToAnchor(hash);

    if ( handleOpenDropdown ) {
      handleOpenDropdown();
    }

  };

  return (
      <li className="menu__item">
        <button onClick={ handleClick }
                className={ `menu__link ${ window.location.hash === hash ? 'active' : '' }` }>
          { title }
        </button>
      </li>
  );
};

export interface MenuInterface {
  className?: string;
  handleOpenDropdown?: () => void;
}

const Menu: React.FC<MenuInterface> = ({ className = '', handleOpenDropdown, ...props }) => {
  return (
      <ul className={ `menu ${ className }` }>

        { menu.map((item, index) => <MenuItem title={ item.title }
                                              key={ index }
                                              handleOpenDropdown={ handleOpenDropdown }
                                              hash={ item.hash }/>) }
      </ul>
  );
};

export default Menu;
