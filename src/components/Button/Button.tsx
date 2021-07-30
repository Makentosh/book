import React from 'react';
import './Button.scss';

type ButtonTypes = {
    link?: boolean;
    url?: string;
    title?: string;
    className?: string;
    onClick?: () => void;
    type?: 'submit' | 'reset' | undefined
}

const Button: React.FC<ButtonTypes> = ({link = false, url = '',
                                           title = '', className = '',
                                           onClick, ...props}) => {
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
