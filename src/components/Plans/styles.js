import Styled from 'styled-components';

export const ContainerPlan = Styled.div`
  margin-top: 60px;

  img.first-img{
    width: 100%;
    height: 400px;
  }

  img.second-img{
    width: 380px;
    height: 400px;
  }

  img.third-img{
    width: 380px;
    height: 370px;
  }

`;

export const CardPlan = Styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;

  &:before{
    position: absolute;
    right: 95px;

    content: '';
    width: 0;
    height: 0;
    margin-top: -55px;
    border-left: 32.5px solid transparent;
    border-right: 32.5px solid transparent;
    border-bottom: 56px solid #E22D4A;
  }

  div.content{
    background: #E22D4A;

    height: 370px;
    padding-bottom: 48px;

    h3{
      padding: 40px 65px 0 95px;

      font-family: Raleway;
      font-size: 45px;

      color: #FFFFFF;
      letter-spacing: 1.35px;
      margin-bottom: 30px;
    }

    p{
      padding: 0 65px 0 95px;
      font-size: 18px;
      color: #FFFFFF;

      font-family: 'Ubuntu';
      margin-bottom: 34px;
    }

    div.containerButtons{
      display: flex;
      align-items: center;
      padding: 0 0 0 95px;

      a.cta-left{
        background: #ADD54E;
        font-family: Raleway;
        color: #FFFFFF;
        border-radius: 35px;
        font-size: 18px;
        
        padding: 15px 80px;
        margin-right: 30px;

        text-decoration: none;
      }

      a.cta-right{
        background: transparent;
        font-family: Raleway;
        color: #FFFFFF;
        font-size: 18px;

        border: 2px solid #FFFFFF;
        border-radius: 35px;

        padding: 15px 80px;

        text-decoration: none;
      }
    }
  }
`;
