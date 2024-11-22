import React, { FC } from 'react';
import { scrollToAnchor } from '../Tools';

type MenuItemT = {
  title: string
  hash: string
  handleOpenDropdown?: () => void
  handleHash: (hash: string) => void
  activeHash: string
}

const MenuItem: FC<MenuItemT> = ({ title, hash, handleOpenDropdown, handleHash, activeHash }) => {

  let handleClick = () => {
    scrollToAnchor(hash);
    handleHash(hash);

    if ( handleOpenDropdown ) {
      handleOpenDropdown();
    }
  };

  return (
      <li className="menu__item">
        <button onClick={ handleClick }
                className={ `menu__link ${ activeHash === hash ? 'active' : '' }` }>
          { title }
        </button>
      </li>
  );
};

export default MenuItem;
