import Styled from 'styled-components'

import Banner from '../../assets/img/banner.png'

export const App = Styled.div`
  .zap{
    position: fixed;
    z-index: 8001;
    bottom: 0px;
    right: 0px;

    img{
      height: 130px;
    }

    @media screen and (max-width: 960px) {
      bottom: 0px;
      right: 0px;
    }
  }
`;

export const BannerContainer = Styled.div`
  margin-top: -170px;

  width: 100%;
  height: 900px;
  
  box-shadow: 0 300px 200px rgba(0, 0, 0, .55)  inset;

  background: url(${Banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  

  @media screen and (max-width: 960px) {
    background-size: 100% 100%;
    height: 300px;
    margin-top: 20px;
    box-shadow: 0 300px 200px rgba(0, 0, 0, .55)  inset;
  }

  display: flex;
  align-items: flex-end;

  &::after{
    content: '';
    display: block;
    height: 15px;
    width: 100%;

    background:#ADD54E;
    
    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;
  }

  @media screen and (max-width: 960px) {
    margin: 0;
  }
  `
;
