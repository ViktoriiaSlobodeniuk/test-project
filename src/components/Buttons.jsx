import React from 'react';
import {
  Backbutton,
  FollowButton,
  LoadMoreButton,
  UnfollowButton,
} from '../styles/Buttons.styled';
import { Link } from 'react-router-dom';

export const BackBtn = ({ to, children }) => {
  return (
    <Backbutton type="button">
      <Link to={to}>{children}</Link>
    </Backbutton>
  );
};

export const FollowBtn = ({ onFollowClick }) => {
  return <FollowButton onClick={onFollowClick}>follow</FollowButton>;
};

export const UnFollowBtn = ({ onFollowingClick }) => {
  return <UnfollowButton onClick={onFollowingClick}>following</UnfollowButton>;
};

export const LoadMoreBtn = ({ onLoadMoreClick }) => {
  return <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>;
};
