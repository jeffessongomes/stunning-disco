import Styled from 'styled-components'

export const Nav = Styled.nav`
  background: transparent !important;

  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  &::before{
    border-top: 22px solid #0059A4;

    content: '';
    display: block;
    height: 33px;
    width: 100%;
    background: #E22D4A;
    margin: 0;
  }

  .navbar-brand{
    display: flex;
    align-items: center;
    justify-content: center;

    height: 255px;
    width: 255px;

    background: #FFF;
    margin-top: -120px;
    border-radius: 50%;

    padding: 115px 42px 60px 42px; 

    @media screen and (max-width: 960px) {
      display: none;
    }
  }

  .nav-item{
    padding: 96px 35px !important;
    .nav-link{
      font-size: 18px !important;
      font-family: Raleway;
      color: #FFF !important;
    }
  }
  .navbar-collapse{
    margin-top: -80px;
  }

`