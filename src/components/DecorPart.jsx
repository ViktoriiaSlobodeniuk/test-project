import React from 'react';
import {
  ContextPic,
  Ellipse,
  EllipseColor,
  Line,
  Logo,
} from '../styles/DecorPart.styled';
import ellipse from '../images/ellipse.png';
import picture from '../images/picture.png';
import ellipse_color from '../images/ellipse_color.png';
import logo from '../images/logo.png';

export const DecorPart = () => {
  return (
    <>
      <Logo src={logo} width={76} />
      <ContextPic src={picture} width={308} />
      <Line />
      <Ellipse src={ellipse} alt="avatar" width={80} />
      <EllipseColor src={ellipse_color} width={60} />
    </>
  );
};
