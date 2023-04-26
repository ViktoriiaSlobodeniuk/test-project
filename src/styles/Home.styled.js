import styled from 'styled-components';
import { NavLink as _NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;
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

export const Line = styled.div`
  margin-top: 214px;
  margin-bottom: 60px;
  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Ellipse = styled.img`
  position: absolute;
  top: 178px;
  z-index: 10;
`;
export const EllipseColor = styled.img`
  position: absolute;
  top: 183px;
`;
export const Avatar = styled.img`
  position: absolute;
  top: 183px;
`;
export const ContextPic = styled.img`
  position: absolute;
  top: 28px;
`;
export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const CardContent = styled.div`
  /* font-style: normal; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  /* margin-bottom: 26px; */

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const NavLink = styled(_NavLink)`
  color: #ebd8ff;
`;
export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
