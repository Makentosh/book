'use client';
import React, { useState } from 'react';
import MenuItem from './MenuItem';

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

export interface MenuInterface {
  className?: string;
  handleOpenDropdown?: () => void;
}

const Menu: React.FC<MenuInterface> = ({ className = '', handleOpenDropdown, ...props }) => {
  const [activeHash, setActiveHash] = useState(window.location.hash);

  const handleHash = (hash: string) => {
    setActiveHash(hash);
  };

  return (
      <ul className={ `menu ${ className }` }>

        { menu.map((item, index) => (
            <MenuItem title={ item.title }
                      key={ index }
                      handleHash={ handleHash }
                      activeHash={ activeHash }
                      handleOpenDropdown={ handleOpenDropdown }
                      hash={ item.hash }/>
        )) }
      </ul>
  );
};

export default Menu;
