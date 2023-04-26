import styled from 'styled-components';

export const FollowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 400px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;

  /* Landing/button text color */

  color: #373737;
  cursor: pointer;
`;
export const UnfollowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 400px;

  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: 'Montserrat';

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;

  /* Landing/button text color */

  color: #373737;
  cursor: pointer;
`;

export const LoadMoreButton = styled.button`
  width: 400px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;
export const Backbutton = styled.button`
  width: 400px;
  height: 50px;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  font-family: 'Montserrat';

  &:hover {
    background-color: #5cd3a8;
  }
`;
