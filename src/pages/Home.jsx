import React from 'react';

import { useEffect, useState } from 'react';
import { FetchApi } from '../components/FetchApi';
import { FollowBtn, LoadMoreBtn, UnFollowBtn } from '../components/Buttons';
import { CardContent, Container, Item, List } from '../styles/Home.styled';
import { DecorPart } from '../components/DecorPart';
import { NavLink, Avatar } from '../styles/Home.styled';
import { useLocation } from 'react-router-dom';
const Home = () => {
  const [userCards, setUserCards] = useState([]);
  const [pageCount, setPageCount] = useState('1');
  const [isRespEmpty, setIsRespEmpty] = useState(false);
  const location = useLocation();

  useEffect(() => {
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

  const handleClick = () => {
    setPageCount((parseInt(pageCount) + 1).toString());
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
                {0 ? <FollowBtn /> : <UnFollowBtn />}
              </Item>
            );
          })}
        </List>
        {isRespEmpty ? (
          'End of collection'
        ) : (
          <LoadMoreBtn onLoadMoreClick={handleClick} />
        )}
      </Container>
    </>
  );
};
export default Home;
