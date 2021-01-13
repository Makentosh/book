import React from 'react';
import './Button.scss';

const Button = ({link = false, url = '', title = '', className = '', onClick,  ...props}) => {
  return (
      <>
        {link
            ? <a href={url}
                 {...props}
                 className={`btn ${className}`}>
              {title}
                <span/>
                <span/>
                <span/>
                <span/>
              </a>

            : <button onClick={onClick}
                      {...props}
                      className={`btn ${className}`}>
              {title}
                <span/>
                <span/>
                <span/>
                <span/>
              </button>
        }

      </>

  )
}

export default Button;
