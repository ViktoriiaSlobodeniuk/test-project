import React from 'react';
import { useEffect, useState } from 'react';
import { increaseFollowers, decreaseFollowers } from '../components/FetchApi';
import { FetchUsersApi } from '../components/FetchApi';
import { LoadMoreBtn } from '../components/Buttons';
import { Container } from '../styles/Container.styled';
import { CardsList } from '../components/CardsList';

const Home = () => {
  const [userCards, setUserCards] = useState([]);
  const [pageCount, setPageCount] = useState('1');
  const [isRespEmpty, setIsRespEmpty] = useState(false);
  const [followedUsers, setFollowedUsers] = useState(
    localStorage.getItem('followedUsers')
      ? JSON.parse(localStorage.getItem('followedUsers'))
      : []
  );

  useEffect(() => {
    FetchUsersApi(pageCount)
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

  useEffect(() => {
    localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
  }, [followedUsers]);

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
    <Container>
      <CardsList
        cardsArr={userCards}
        followedUsers={followedUsers}
        handleAddFollower={handleAddFollower}
        handleDeleteFollower={handleDeleteFollower}
      />
      {isRespEmpty ? (
        'End of collection'
      ) : (
        <LoadMoreBtn onLoadMoreClick={handleLoadMore} />
      )}
    </Container>
  );
};
export default Home;
