import React from 'react';

interface iconsTypes {
  className?: string;
  onClick: () => void;
}

export const CloseIcon: React.FC<iconsTypes> = ({ className = '', ...props }) => {
  return <i { ...props } className={ `icon-close ${ className }` }/>;
};

export const VueIcon = ({ className = '', ...props }) => {
  return <i { ...props } className={ `fab fa-vuejs ${ className }` }/>;
};

export const AmazonIcon = ({ className = '', ...props }) => {
  return <i { ...props } className={ `fab fa-amazon ${ className }` }/>;
};

export const SassIcon = ({ className = '', ...props }) => {
  return <i { ...props } className={ `fab fa-sass ${ className }` }/>;
};

export const FacebookIcon = ({ className = '', ...props }) => {
  return <i { ...props } className={ `fab fa-facebook-f ${ className }` }/>;
};

export const TweeterIcon = ({ className = '', ...props }) => {
  return <i { ...props } className={ `fab fa-twitter ${ className }` }/>;
};

export const TwitchIcon = ({ className = '', ...props }) => {
  return <i { ...props } className={ `fab fa-twitch ${ className }` }/>;
};

export const YoutubeIcon = ({ className = '', ...props }) => {
  return <i { ...props } className={ `fab fa-youtube ${ className }` }/>;
};

export const SlackIcon = ({ className = '', ...props }) => {
  return <i { ...props } className={ `fab fa-slack-hash ${ className }` }/>;
};

export const ViberIcon = ({ className = '', ...props }) => {
  return <i { ...props } className={ `fab fa-viber ${ className }` }/>;
};

export const SuccessIcon = ({ ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 48 48"
         width="96px"
         height="96px"
         { ...props }>
      <linearGradient id="I9GV0SozQFknxHSR6DCx5a" x1="9.858" x2="38.142" y1="9.858" y2="38.142"
                      gradientUnits="userSpaceOnUse">
        <stop offset="0"
              stopColor="#21ad64"/>
        <stop offset="1"
              stopColor="#088242"/>
      </linearGradient>
      <path fill="url(#I9GV0SozQFknxHSR6DCx5a)"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>
      <path
          d="M32.172,16.172L22,26.344l-5.172-5.172c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414 c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0l13-13c0.781-0.781,0.781-2.047,0-2.828L35,16.172 C34.219,15.391,32.953,15.391,32.172,16.172z"
          opacity=".05"/>
      <path
          d="M20.939,33.061l-8-8c-0.586-0.586-0.586-1.536,0-2.121l1.414-1.414c0.586-0.586,1.536-0.586,2.121,0 L22,27.051l10.525-10.525c0.586-0.586,1.536-0.586,2.121,0l1.414,1.414c0.586,0.586,0.586,1.536,0,2.121l-13,13 C22.475,33.646,21.525,33.646,20.939,33.061z"
          opacity=".07"/>
      <path fill="#fff"
            d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0 L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414l-13,13 C22.317,33.098,21.683,33.098,21.293,32.707z"/>
    </svg>
);
