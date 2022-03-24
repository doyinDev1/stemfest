import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    gap: 2.3125rem;
    margin-top: 2rem;

    @media (max-width: ${({ theme }) => theme.queries.deskMini}){
        flex-direction: column;
        margin-top: none;
        align-items: center;
    }

  



`