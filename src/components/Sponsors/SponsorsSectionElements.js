import styled from "styled-components";

export const SponsorsContainer = styled.div`
  background: #013261;

  @media screen and (max-width: 768px) {
    padding: 8px 24px;
  }
`;

export const SponsorsWrapper = styled.div`
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const SponsorsParagraph = styled.p`
  font-size: 18px;
  color: #f3f3f3;
  text-align: center;
  padding: 20px;
  margin-top: 15px;
`;
export const SponsorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 150px 150px;
  grid-gap: 10px;
  padding: 2.5rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100px 100px;
    flex-direction: column;
    grid-gap: 1px;
    padding: 1.5rem;
  }
`;

export const SponsorsContent = styled.div`
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  /* background: linear-gradient(45deg,  #013261, #ffc100); */
  // border-top-left-radius: 50px;
  // border-bottom-right-radius: 50px;
  display: flex;
  // filter: drop-shadow(0 0 1.75rem #ffc100);

  /* @media screen and (max-width: 768px) {
    padding: 50px 50px;
  } */
`;

export const SponsorsImage = styled.img`
  width: 90px;
  height: auto;
padding: 10px;
  align-self: center;
  border-radius: 20px;
`;

export const SponsorsTitle = styled.h3`
  font-size: 18px;
  text-align: center;
  color: #fff;
  margin-left: 10px;
  font-weight: bold;
`;

export const SponsorsHeader = styled.h1`
  font-size:18px;
  align-items: center;
  text-align: center;
  margin: auto; 
  margin-top: 20px;
  text-transform: uppercase;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
