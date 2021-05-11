import Styled from 'styled-components'

import Banner from '../../assets/img/banner.png'

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
    content: 'a';
    display: block;
    height: 15px;
    width: 100%;

    background:#ADD54E;
    
    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;
  }
  `
;
