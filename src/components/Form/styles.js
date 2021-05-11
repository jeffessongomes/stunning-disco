import Styled from 'styled-components';

export const FormStyle = Styled.form`
  h3{
    font-size: 45px;
    font-weight: normal;
    font-family: Raleway;
    color: #E22D4A;
    letter-spacing: 1.35px;
    margin-top: 53px;
    margin-bottom: 35px;
  }
  .button{
    @media screen and (max-width: 960px) {
      button{
        padding-left: 60px;
        padding-right: 60px;
      }
    }
  }
`;

export const ContainerForm = Styled.form`
  .input-data { 
    margin-top: 40px;

    height: 40px;
    width: 100%;
    position: relative;
    font-size: 14px;

    input {
      height: 100%;
      width: 100%;
      border: none;
      border-bottom: 3px solid #BEBEBE;
      font-size: 14px;
      color: #6F6F6F;
      
      &:focus{
        outline: none;
        border-bottom: 3px solid #E22D4A;
      }

      &:focus ~ label {
        transform: translateY(-20px);
        font-size: 12px;
        color: #666666;
      }

      &:valid ~ label{
        transform: translateY(-20px);
        font-size: 12px;
        color: black;
      }
    }
   
    label {
      text-transform: uppercase;

      position: absolute;
      bottom: 0px;
      left: 0;
      color: #6F6F6F;
      pointer-events: none;
      transition: all 0.3s ease;
      font-size: 14px;
    }
  }

  div.input-select{
    margin-top: 48px;
    font-size: 14px;

    .select__control--menu-is-open{
      border-bottom: 3px solid #E22D4A !important;
    }

    div.select__control{
      box-shadow: none;

      background: transparent;
      border: none;
      margin: 0;
      padding: 0;
      border-bottom: 3px solid #BEBEBE;
      border-radius: 0;
      min-height: 0;
      transition: all 0.2s ease;

      div.select__value-container{
        padding: 0;
        margin: 0;

        div.select__placeholder{
          background: transparent;
          color: #6F6F6F;
          
          bottom: -11px;
        }
      }

      div.select__indicators{
        .select__indicator{
          padding: 0px !important;
        }

        span.select__indicator-separator{
          display: none;
        }
      }
    }
  }
`;
