import React from 'react';
import Container from '@material-ui/core/Container';
import UserAvatar from './UserAvatar';
import UserForm from './UserForm';
import './User.css';

export default function User() {
  return (
    <>
      <Container maxWidth="md" className="UserContainer">
        <div className="PortraitImg">
          <UserAvatar />
        </div>
        <UserForm className="UserForm" />
      </Container>
    </>
  );
}
