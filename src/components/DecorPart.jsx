import React from 'react';

import { Avatar, ContextPic, Line, Logo } from '../styles/Home.styled';
import avatarImg from '../images/avatar.png';
import picture from '../images/picture.png';
import logo from '../images/logo.png';

export const DecorPart = () => {
  return (
    <>
      <Logo src={logo} width={76} />
      <ContextPic src={picture} width={308} />
      <Line />
      <Avatar src={avatarImg} alt="avatar" width={80} />
    </>
  );
};
