import React from 'react';
import {ScrollTo} from '../Tools';

const menu = [
  {title: 'Home', hash: '#header'},
  {title: 'About', hash: '#about'},
  {title: 'Contents', hash: '#content'},
  {title: 'Books', hash: '#books'},
  {title: 'Education', hash: '#education'},
  {title: 'Skills', hash: '#skills'},
  {title: 'Portfolio', hash: '#portfolio'},
  {title: 'Clients', hash: '#clients'},
  {title: 'Contact', hash: '#subscribe'},
]


type MenuItemT = {
    title: string
    hash: string
}

const MenuItem: React.FC<MenuItemT> = ({title, hash, ...props}) => {
  return (
      <li className="menu__item">
        <button onClick={() => ScrollTo(hash)}
                className={`menu__link ${window.location.hash === hash ? 'active' : ''}`}>
          {title}
        </button>
      </li>
  )
}

const Menu = ({className = '', ...props}) => {
  return (
      <ul className={`menu ${className}`}>

        {menu.map((item, index) => <MenuItem title={item.title}
                                                                            key={index}
                                                                            hash={item.hash}/>)}
      </ul>
  )
}

export default Menu;
