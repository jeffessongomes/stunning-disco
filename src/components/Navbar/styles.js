import Styled from 'styled-components'

export const Nav = Styled.nav`
  background: transparent !important;

  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  &::before{
    border-top: 10px solid #0000c6;

    content: '';
    display: block;
    height: 15px;
    width: 100%;
    background: #CB6424;
    margin: 0;
  }

  .navbar-brand{
    display: flex;
    align-items: center;
    justify-content: center;

    height: 225px;
    width: 225px;

    background: red;
    margin-top: -85px;
    margin-left: 100px;
    border-radius: 50%;
  }

  .nav-item{
    padding: 15px 35px !important;
  }


  .navbar-collapse{
    margin-top: -80px;
  }

`