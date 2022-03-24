import styled from "styled-components";

export const CardStyle = styled.div`
    border-radius: 15px;
    width: 13.5rem;
    height: 23.1875rem;
    text-align: center;
   box-shadow: -2px 1px 32px -8px rgba(1,50,97,0.75);
-webkit-box-shadow: -2px 1px 32px -8px rgba(1,50,97,0.75);
-moz-box-shadow: -2px 1px 32px -8px rgba(1,50,97,0.75);
color: ${({ theme }) => theme.colors.white};
margin-top: ${({ margin }) => margin} ;
    
    &>img{
        margin: 32px 32px 32px;
        height: 100px;
        width: 100px;
    }
    &>h3{
        color: ${({ theme }) => theme.colors.white};
        letter-spacing: 0.25px;
        font-weight: ${({ theme }) => theme.weight.medium};
        font-size: 1.25rem;
    }
    &>p{
        font-size: 0.9375rem;
        // padding:  6px 0 30px;
        max-width: 200px;
        // text-align: center;
        color: ${({ theme }) => theme.colors.white};

    }


    
`