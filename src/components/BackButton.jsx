import React from 'react';
import { NavLink } from 'react-router-dom';

export const BackButton = () => {
  return (
    <button type="button">
      <NavLink to="/">back</NavLink>
    </button>
  );
};
