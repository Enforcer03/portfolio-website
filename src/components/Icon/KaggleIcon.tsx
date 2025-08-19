import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const KaggleIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    {/* Corrected SVG path for the Kaggle logo */}
    <path
      d="M14.5 15.25L9.25 10l-5 5.25L0 11.5l9.25-9.5L14.5 7l5-5L24 6l-9.5 9.25z"
      fill="currentColor"
    />
  </Icon>
));

export default KaggleIcon;
