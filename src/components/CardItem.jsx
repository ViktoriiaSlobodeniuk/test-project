import React from 'react';
import { DecorPart } from '../components/DecorPart';
import { NavLink, Avatar } from '../styles/CardItem.styled';
import { CardContent, Item } from '../styles/CardItem.styled';
import { FollowBtn, UnFollowBtn } from '../components/Buttons';
import { useLocation } from 'react-router-dom';

export const CardItem = ({
  id,
  avatar,
  user,
  tweets,
  followers,
  followedUsers,
  handleDeleteFollower,
  handleAddFollower,
}) => {
  const location = useLocation();

  return (
    <Item>
      <DecorPart />
      <Avatar src={avatar} alt="avatar" width={55} />
      <CardContent>
        <p>{user}</p>
        <NavLink to="/tweets" state={{ from: location }}>
          {tweets.toLocaleString('en-US')} tweets
        </NavLink>
        <p>{followers.toLocaleString('en-US')} followers</p>
      </CardContent>
      {followedUsers.includes(id) ? (
        <UnFollowBtn onFollowingClick={() => handleDeleteFollower(id)} />
      ) : (
        <FollowBtn onFollowClick={() => handleAddFollower(id)} />
      )}
    </Item>
  );
};
