import Styled from 'styled-components';

import uniao from '../../assets/img/uniao.png';

export const AboutContainer = Styled.div`
  background: url(${uniao});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 225%;

  h2 {
    font-family: Raleway;
    font-size: 45px;
    color: #E22D4A;
    margin-bottom: 40px;
  }
  p{
    font-family: Raleway;
    font-size: 18px;
    line-height: 33px;
  }

  padding: 97px 0 60px 0;
`;

export const Img = Styled.img`
  padding: 38px 0 51px 0;
`;
