import React from 'react';
// import { BackButton } from '../components/Buttons';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// export const BackButton = () => {
//   const location = useLocation();
//   const backLink = location.state?.from ?? '/';
//   return <NavLink to={backLink}>back</NavLink>;
// };

const Tweets = () => {
  const location = useLocation();
  const backLink = location.state?.from ? location.state?.from : '/';
  return (
    <>
      <h1>tweets</h1>
      {/* <NavLink to={backLink}>back</NavLink> */}
    </>
  );
};
export default Tweets;
