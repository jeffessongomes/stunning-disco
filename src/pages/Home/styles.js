import Styled from 'styled-components'

import Banner from '../../assets/img/banner.png'

export const App = Styled.div`
  .zap{
    position: fixed;
    z-index: 8001;
    bottom: 50px;
    right: 95px;
    @media screen and (max-width: 960px) {
      bottom: 90px;
      right: 20px;
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
    margin-top: -235px;
  }
  `
;
