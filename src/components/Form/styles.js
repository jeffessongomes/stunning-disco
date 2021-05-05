import Styled from 'styled-components';

export const FormStyle = Styled.form`
  h3{
    font-size: 45px;
    font-weight: normal;
    font-family: Raleway;
    color: #E22D4A;
    letter-spacing: 1.35px;
    margin-top: 53px;
    margin-bottom: 66px;
  }
`;

export const ContainerForm = Styled.form`
  .input-data { 
    height: 40px;
    width: 100%;
    position: relative;
    font-size: 14px;

    input {
      height: 100%;
      width: 100%;
      border: none;
      border-bottom: 2px solid #555555;
      font-size: 14px;
      color: #6F6F6F;
      
      &:focus{
        outline: none;
      }

      &:focus ~ label {
        transform: translateY(-20px);
        font-size: 12px;
        color: #666666;
        border-bottom: 3px solid E22D4A;
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
`;
