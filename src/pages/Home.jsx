import React from 'react';

import { useEffect, useState } from 'react';
import { FetchApi } from '../components/FetchApi';
import { FollowBtn, LoadMoreBtn, UnFollowBtn } from '../components/Buttons';
import { CardContent, Item, List } from '../styles/Home.styled';
import { DecorPart } from '../components/DecorPart';
import { NavLink } from '../styles/Home.styled';
const Home = () => {
  const [userCards, setUserCards] = useState([]);
  const [pageCount, setPageCount] = useState('1');
  // console.log('pageCount', pageCount);

  useEffect(() => {
    FetchApi(pageCount)
      .then(resp => {
        // console.log('fetch:', resp.data);
        setUserCards(resp.data);
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
      <div>
        <List>
          {userCards.map(({ user, followers, tweets, avatar, id }) => {
            return (
              <Item key={id}>
                <DecorPart />
                <CardContent>
                  <p>{user}</p>
                  <NavLink to="/tweets">
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
      </div>
    </>
  );
};
export default Home;
