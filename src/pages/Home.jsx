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
  const location = useLocation();

  // console.log('pageCount', pageCount);

  useEffect(() => {
    FetchApi(pageCount)
      .then(resp => {
        // console.log('fetch:', resp.data);
        setUserCards([...userCards, ...resp.data]);
      })
      .catch(error => {
        console.log(error);
      });
  }, [pageCount]);

  const handleClick = () => {
    // console.log('load more btn');
    setPageCount((parseInt(pageCount) + 1).toString());
  };
  // console.log('newPageCount', pageCount, typeof pageCount);
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
        <LoadMoreBtn onLoadMoreClick={handleClick} />
      </Container>
    </>
  );
};
export default Home;
