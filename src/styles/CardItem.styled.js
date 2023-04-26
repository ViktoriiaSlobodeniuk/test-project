import styled from 'styled-components';
import { NavLink as _NavLink } from 'react-router-dom';

export const Item = styled.li`
  font-family: 'Montserrat';

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border: 1px solid #000000;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
export const Avatar = styled.img`
  position: absolute;
  top: 183px;
`;
export const NavLink = styled(_NavLink)`
  color: #ebd8ff;
`;
