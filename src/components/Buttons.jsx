import React from 'react';
import {
  FollowButton,
  LoadMoreButton,
  UnfollowButton,
} from '../styles/Buttons.styled';
// import { useLocation } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

// export const BackButton = () => {
//   const location = useLocation();
//   const backLink = location.state?.from ?? '/';
//   return (
//     <button type="button">
//       <NavLink to={backLink}>back</NavLink>
//     </button>
//   );
// };

export const FollowBtn = () => {
  return <FollowButton>follow</FollowButton>;
};

export const UnFollowBtn = () => {
  return <UnfollowButton>following</UnfollowButton>;
};

export const LoadMoreBtn = ({ onLoadMoreClick }) => {
  return <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>;
};
