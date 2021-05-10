import Styled from "styled-components";

export const Container = Styled.div`
    
    .map {
        border-radius: 20px;
        border: none;
        width: 100%;
        height: 500px;

        padding: 0 250px;
        margin: 141px 0;
    }

    .info{
        z-index: 2;
        position: relative;
        background-color: #0059A4 !important;
        border-radius: 13px;
        color: #FFF;

        .banner{
            .local{
                h3{
                    font-size: 20px !important;
                    font-family: Raleway;
                    text-align: center;
                }
                
                border-radius: 13px;
                background-color: #E22D4A;

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    .clock{
        p{
            margin: 0;
        }
    }

    a{
        font-family: 'Encode Sans';
        color: #FFF;
        font-size: 16px;
        text-decoration: none;
        margin-left: 5px;
    }
    a:hover{
        font-family: 'Encode Sans';
        color: #FFF;
        text-decoration: none;
    }
`;
