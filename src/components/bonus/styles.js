import Styled from 'styled-components';
import { Tabs } from 'react-bootstrap';

export const Container = Styled.div`
  position: relative;

  margin-top: 79px;
  
  background: 20px;
  z-index: 1;
  
   
  img.peixe{
    position absolute;
    top: 180px;
    left: 40px;
  }

  h3{
    font-size: 45px;
    font-family: Raleway;

    color: #FFFFFF;
    padding-top: 67px;
    margin-bottom: 65px;
  }

  .cardInfoContainer{
    @media screen and (max-width: 960px) {
      margin-top: -190px;
    }
  }
`;

export const ContainerBonus = Styled.div`
  background: #ADD54E;
  padding-bottom: 98px;

  @media screen and (max-width: 960px) {
    .cardContainer{
      display: flex;
      justify-content: center;

      div{
        display: flex;
        justify-content: center;
        margin-top: 10px;
      }
    }
  }
`;

export const Nav = Styled(Tabs)`
  border: none;
  padding: 0 15px;
  margin-bottom: 60px;
  position: relative;

  a{ 
    font-size: 18px;
    color: #FFFFFF !important;
    font-family: Raleway;
    font-weight: 700;
    padding: 15px 55px;
    border: 0px solid transparent !important;

    &:hover{
      border: 0px solid transparent !important;
      outline: none;
      text-decoration: none;

    }

    &.active{
      border: 0px solid transparent !important;
      background: #0059A4 !important;
      border-radius: 35px;

      height: 50px;
      
      display: flex;
      align-items: center;
      justify-content: center;

      font-family: Raleway;
      padding: 15px 55px;

      @media screen and (max-width: 960px) {
        padding: 10px 15px;
      }
    }

    @media screen and (max-width: 960px) {
      padding: 10px 15px;
    }
  }
`;

export const Card = Styled.div`
  background: #F3F3F3;
  border-radius: 14px;
  height: 293px;
  width: 255px;
  padding: 10px 33px;

  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    font-size: 18px;
    font-family: Ubuntu;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: #262626;
  }
`;

export const ContainerInfo = Styled.div`
  background: #0059A4;
  height: 411px;
`;

export const CardInfo = Styled.div`
  background: #F3F3F3;
  height: 446px;
  width: 350px;
  margin-top: -210px;
  box-shadow: 0px 3px 6px #00000029;

  img.cardImage {
    width: 350px;
    height: 284px;
  }
  
  @media screen and (max-width: 960px) {
    margin-top: 10px;
    width: 100%;

    img.cardImage{
      width: 100%;
      object-fit: cover;
    }
  }

  p{
    font-family: Ubuntu;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: #262626;
    padding: 38px 35px;
  }

`;