import React from 'react';

import { useEffect, useState } from 'react';
import {
  FetchApi,
  increaseFollowers,
  decreaseFollowers,
} from '../components/FetchApi';
import { FollowBtn, LoadMoreBtn, UnFollowBtn } from '../components/Buttons';
import { CardContent, Container, Item, List } from '../styles/Home.styled';
import { DecorPart } from '../components/DecorPart';
import { NavLink, Avatar } from '../styles/Home.styled';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [userCards, setUserCards] = useState([]);
  const [pageCount, setPageCount] = useState('1');
  const [isRespEmpty, setIsRespEmpty] = useState(false);
  const [followedUsers, setFollowedUsers] = useState(
    JSON.parse(localStorage.getItem('followedUsers')) ?? []
  );

  const location = useLocation();

  useEffect(() => {
    console.log('followedUsers useEffect');

    localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
    console.log('ололол', followedUsers);
  }, [followedUsers]);

  useEffect(() => {
    console.log('pageCount useEffect');
    FetchApi(pageCount)
      .then(resp => {
        if (resp.data.length === 0) {
          setIsRespEmpty(true);
        }
        setUserCards([...userCards, ...resp.data]);
      })
      .catch(error => {
        console.log(error);
      });
  }, [pageCount]);

  const handleLoadMore = () => {
    setPageCount((parseInt(pageCount) + 1).toString());
  };

  const handleAddFollower = userId => {
    increaseFollowers(userId);
    setFollowedUsers([...followedUsers, userId]);
    setUserCards(
      userCards.map(userCard => {
        if (userCard.id === userId) {
          return { ...userCard, followers: userCard.followers + 1 };
        }
        return userCard;
      })
    );
  };

  const handleDeleteFollower = userId => {
    decreaseFollowers(userId);
    setFollowedUsers([...followedUsers.filter(id => id !== userId)]);
    setUserCards(
      userCards.map(userCard => {
        if (userCard.id === userId) {
          return { ...userCard, followers: userCard.followers - 1 };
        }
        return userCard;
      })
    );
  };

  return (
    <>
      <Container>
        <List>
          {userCards.map(({ user, followers, tweets, id, avatar }) => {
            return (
              <Item key={id}>
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
                  <UnFollowBtn
                    onFollowingClick={() => handleDeleteFollower(id)}
                  />
                ) : (
                  <FollowBtn onFollowClick={() => handleAddFollower(id)} />
                )}
              </Item>
            );
          })}
        </List>
        {isRespEmpty ? (
          'End of collection'
        ) : (
          <LoadMoreBtn onLoadMoreClick={handleLoadMore} />
        )}
      </Container>
    </>
  );
};
export default Home;
