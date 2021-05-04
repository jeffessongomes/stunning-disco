import Styled from 'styled-components';

export const ContainerAssociated = Styled.div`
  background: #0059A4;

  div.content{
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 138px;
        height: 100%;

      &.right{
        webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }
    }

    

    div.text{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h2{
        color: #FFFFFF;
        font-family: Raleway;
        margin-bottom: 11px;
        font-size: 35px;

        padding-top: 56px;
      }

      p{
        font-size: 16px;
        font-family: Raleway;
        color: #FFFFFF;
        margin: 0;
      }

      a{
        background: #ADD54E;
        color: #FFFFFF;

        text-decoration: none;
        margin-top: 30px;
        margin-bottom: 39px;
        padding: 15px 32px;
        
        font-size: 18px;
        font-family: Raleway;

        border-radius: 35px;

      }
    }
  }
`;
