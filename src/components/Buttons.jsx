import React from 'react';
import { NavLink } from 'react-router-dom';
import { FollowButton, UnfollowButton } from '../styles/FollowBtns.styled';

export const BackButton = () => {
  return (
    <button type="button">
      <NavLink to="/">back</NavLink>
    </button>
  );
};

export const FollowBtn = () => {
  return <FollowButton>follow</FollowButton>;
};

export const UnFollowBtn = () => {
  return <UnfollowButton>following</UnfollowButton>;
};

export const LoadMoreBtn = ({ onLoadMoreClick }) => {
  return <button onClick={onLoadMoreClick}>Load More</button>;
};
