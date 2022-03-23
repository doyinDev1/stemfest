import React from "react";
import {
  SponsorsContainer,
  SponsorsContent,
  SponsorsGrid,
  SponsorsHeader,
  SponsorsImage,
  SponsorsTitle,
  SponsorsWrapper,
} from "./SponsorsSectionElements";
import aircall from '../../app/images/aircall.png'
import aws from '../../app/images/aws.png'
import google from '../../app/images/google.jpg'
import linkedIn from '../../app/images/linkedin.png'
import saltedstone from '../../app/images/saltedstone.jpg'
import seismic from '../../app/images/seismic.png'
import audioeye from '../../app/images/audioeye.png'

const Sponsors = () => {
  return (
    <SponsorsContainer id="sponsors">
      <SponsorsWrapper>
        <SponsorsHeader>2022 Sponsors</SponsorsHeader>
        <SponsorsGrid>
          <SponsorsContent>
            <SponsorsImage src={google} />
            <SponsorsTitle>Google</SponsorsTitle>
          </SponsorsContent>
          <SponsorsContent>
            <SponsorsImage src={audioeye} />
            <SponsorsTitle>Audioeye</SponsorsTitle>
          </SponsorsContent>
          <SponsorsContent>
            <SponsorsImage src={aws} />
            <SponsorsTitle>Aws</SponsorsTitle>
          </SponsorsContent>
          <SponsorsContent>
            <SponsorsImage src={aircall} />
            <SponsorsTitle>Aircall</SponsorsTitle>
          </SponsorsContent>
          <SponsorsContent>
            <SponsorsImage src={seismic} />
            <SponsorsTitle>Seismic</SponsorsTitle>
          </SponsorsContent>
          <SponsorsContent>
            <SponsorsImage src={saltedstone} />
            <SponsorsTitle>Saltedstone</SponsorsTitle>
          </SponsorsContent>
          <SponsorsContent>
            <SponsorsImage src={linkedIn} />
            <SponsorsTitle>LinkedIn</SponsorsTitle>
          </SponsorsContent>
        </SponsorsGrid>

      </SponsorsWrapper>
    </SponsorsContainer>
  );
};

export default Sponsors;
