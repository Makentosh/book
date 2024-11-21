import React from 'react';
// import { ReactComponent as FeatureTime } from '../icons/feature/feature-time.svg';

interface iconsTypes {
    className?: string
    onClick: () => void
}


// export const FeatureCoinIcon = (props) => {
//     return <FeatureCoin {...props}/>
// }

export const CloseIcon: React.FC<iconsTypes> = ({className = '', ...props}) => {
    return <i {...props} className={`icon-close ${className}`} />;
}
