import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './UserAvatar.css';

export default function UserAvatar() {
  return (
    <div className="UserAvatarDiv">
      <Avatar alt="Jhon Snow" src="https://peru21.pe/resizer/TXxtyJjG3tta6dCsEvqqccFw_zY=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MHTXJWI6VZFNNKIM3HM5LKBFWE.jpg" className="UserAvatarImg" />
    </div>
  );
}
