import React, { useRef } from 'react';
import { BackBtn } from '../components/Buttons';
import { useLocation } from 'react-router-dom';
import { Container } from '../styles/Home.styled';

const Tweets = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <Container>
      <BackBtn to={backLinkHref.current}>Back</BackBtn>
      <h1>There may be tweets from the author</h1>
    </Container>
  );
};
export default Tweets;
