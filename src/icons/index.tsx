import React from 'react';

interface iconsTypes {
    className?: string
    onClick: () => void
}

export const CloseIcon: React.FC<iconsTypes> = ({className = '', ...props}) => {
    return <i {...props} className={`icon-close ${className}`} />;
}

export const VueIcon = ({className = '', ...props}) => {
  return <i {...props} className={`fab fa-vuejs ${className}`} />;
};

export const AmazonIcon = ({className = '', ...props}) => {
  return <i {...props} className={`fab fa-amazon ${className}`} />;
};

export const SassIcon = ({className = '', ...props}) => {
  return <i {...props} className={`fab fa-sass ${className}`} />;
};

export const FacebookIcon = ({className = '', ...props}) => {
  return <i {...props} className={`fab fa-facebook-f ${className}`} />;
};

export const TweeterIcon = ({className = '', ...props}) => {
  return <i {...props} className={`fab fa-twitter ${className}`} />;
};

export const TwitchIcon = ({className = '', ...props}) => {
  return <i {...props} className={`fab fa-twitch ${className}`} />;
};

export const YoutubeIcon = ({className = '', ...props}) => {
  return <i {...props} className={`fab fa-youtube ${className}`} />;
};

export const SlackIcon = ({className = '', ...props}) => {
  return <i {...props} className={`fab fa-slack-hash ${className}`} />;
};

export const ViberIcon = ({className = '', ...props}) => {
  return <i {...props} className={`fab fa-viber ${className}`} />;
};
