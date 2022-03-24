import styled from "styled-components";

export const IntroStyle = styled.div`
    
    text-align: center;
    display: grid;
    place-content: center;
    place-items: center;
    
    &>h2{
        margin-top: -50px;
        margin-bottom: 40px;
        background: #ffc100;
        border-radius: 5px;
        color: #fff;
        padding: 0px 3px;
        font-size: 15px;
    }

    &>p{
        width: 100%;
        color: white;

        @media (max-width: ${({ theme }) => theme.queries.mobile}){
            width: 100%;
            
        }
    }

    @media (max-width: ${({ theme }) => theme.queries.mobile}){
        padding: 0 32px;
    }

`