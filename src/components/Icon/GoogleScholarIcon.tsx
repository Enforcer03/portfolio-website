import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const GoogleScholarIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M64 14 8 44l56 28 56-28L64 14zm0 60.8L20.4 54.7v20.9C20.4 91.1 39.1 104 64 104s43.6-12.9 43.6-28.4V54.7L64 74.8z"
      fillRule="evenodd"
    />
    <path d="M86.5 82.7c0 9.6-9.6 17.3-22.5 17.3s-22.5-7.7-22.5-17.3v-9l22.5 11.6 22.5-11.6v9z" />
    <circle cx="64" cy="52" r="11" />
  </Icon>
));

GoogleScholarIcon.displayName = 'GoogleScholarIcon';
export default GoogleScholarIcon;
