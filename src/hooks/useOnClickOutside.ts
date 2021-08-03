import React from 'react';


const useOnClickOutside = (ref: any, callback: () => void) => {
  const handleClick = (e: Event) => {
    if ( ref.current && !ref.current.contains(e.target) ) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOnClickOutside;
