import Styled from 'styled-components'

import Bars from '../../assets/img/bars-solid.svg';

export const NavStyle = Styled.div`
  &::before{
    border-top: 22px solid #0059A4;

    content: '';
    display: block;
    height: 37px;
    width: 100%;
    background: #E22D4A;
    margin: 0;


    position: relative;
    z-index: 30;
  }  
  nav{
    background: transparent !important;

    button{
      border: 1px solid #ADD54E !important;
      span{
        background: url(${Bars}) !important;
      }
    }

    .navbar-brand{
      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;
      z-index: 30;

      height: 255px;
      width: 255px;

      background: #FFF;
      margin-top: -140px;
      border-radius: 50%;

      padding: 115px 42px 60px 42px; 

      @media screen and (max-width: 960px) {
        background: #FFF;
        margin-top: -130px;
        position: relative;
        z-index: 30;
      }
    }


    .nav-link{
      padding: 96px 35px !important;

      font-size: 18px !important;
      font-family: Raleway;
      color: #FFF !important;

      @media screen and (max-width: 960px) {
        color: #000000 !important;
        padding: 20px 30px !important;
      }
    }
    .navbar-collapse{
      margin-top: -80px;
      margin-left: 90px;
      
      @media screen and (max-width: 960px) {
        margin-top: 0;
        margin-left: 0;
        background: #FFF;
        border-radius: 25px;
      }
    }
  }
`;