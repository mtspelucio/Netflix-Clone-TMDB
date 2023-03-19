import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: ${({background}) => background ? '#111' : 'transparent' };
  transition: all ease .5s;



  .logo{
    height: 25px;
  }

  .logo img{
    height: 100%;
  }

  .user {
    height: 35px;
  }

  .user img{
    height: 100%;
    border-radius: 3px;
  }
`;
