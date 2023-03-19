import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;

  h2{
    margin: 0 0 0 30px;
  }

  .listArea{
    overflow-x: hidden;
    padding-left: 30px;

    .left,
    .right{
      padding: 5px;
      position: absolute;
      width: 40;
      height: 225px;
      background-color: rgba(0, 0, 0, 0.6);
      font-weight: bold;
      font-size: 25px;
      z-index: 999;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      opacity: 0;
      transition: all ease .5s;
    }

    .left{
      left: 0;
    }
    .right{
      right: 0;
    }

    .item{
      display: inline-block;
      width: 150px;
      cursor: pointer;
    }

    .item img{
      width: 100%;
      transform: scale(.9);
    }

    .item img:hover{
      transform: scale(1);
      transition: all ease .5s;
    }
  }

  .listArea:hover .left,
  .listArea:hover .right{
    opacity: 1;
  }

  @media (max-width: 760px) {
    .listArea{
      .left,
      .right{
        opacity: 1;
      }
    }
  }
  
`;

export const List = styled.div`
  width: ${ ({ quantiti }) => quantiti * 150}px;
  margin-left: ${ ({ scroll }) => scroll}px;
  transition: all ease .5s;
`;