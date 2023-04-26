import React from 'react';
import { List } from '../styles/CardsList.styled';
import { CardItem } from './CardItem';

export const CardsList = ({
  cardsArr,
  followedUsers,
  handleDeleteFollower,
  handleAddFollower,
}) => {
  return (
    <List>
      {cardsArr.map(({ user, followers, tweets, id, avatar }) => {
        return (
          <CardItem
            key={id}
            id={id}
            avatar={avatar}
            user={user}
            tweets={tweets}
            followers={followers}
            followedUsers={followedUsers}
            handleAddFollower={handleAddFollower}
            handleDeleteFollower={handleDeleteFollower}
          />
        );
      })}
    </List>
  );
};
