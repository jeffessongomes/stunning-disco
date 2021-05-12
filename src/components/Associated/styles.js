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

      @media screen and (max-width: 500px) {
        display: none;      
      }
    }
    
    @media screen and (max-width: 960px) {
      justify-content: center !important;
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
        text-align: center;

        padding-top: 56px;

        @media screen and (max-width: 960px) {
          text-align: center;       
        }
      }

      p{
        font-size: 16px;
        font-family: Raleway;
        color: #FFFFFF;
        margin: 0;
        text-align: center;
        
        @media screen and (max-width: 960px) {
          text-align: center;        
        }
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
