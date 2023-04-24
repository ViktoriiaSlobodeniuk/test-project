import React from 'react';

import { useEffect, useState } from 'react';
import { FetchApi } from '../components/FetchApi';
import { FollowBtn, UnFollowBtn } from '../components/FollowBtn';
import { CardContent, Item, List } from '../styles/Home.styled';
import { DecorPart } from '../components/DecorPart';
import { NavLink } from '../styles/Home.styled';
const Home = () => {
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    FetchApi('users')
      .then(resp => {
        console.log('fetch:', resp.data);
        setUserCards(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
      </div>
    </>
  );
};
export default Home;

//   const location = useLocation(); for what&&!
