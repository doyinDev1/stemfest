import styled from "styled-components";


export const StyledHero = styled.section`
    display: ${({ feature, clicked, index }) => {
        if (feature) {
            if (clicked === index) {
                return 'flex'

            }
            else {
                return 'none'
            }
        }
        else {
            return 'flex'
        }
    }};
    justify-content: space-between;
    gap:65px;
    padding: 50px 30px 100px 100px;
    align-items: center;
    background: url(${({ theme }) => theme.background});
    //  background: url(${({ feature, theme }) => feature ? theme.rectangleLeft : theme.rectangleRight});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    // background-position:  ${({ feature }) => feature ? 'left bottom' : 'right bottom'} ;


    &>*{
        flex: 1;
    }

    
@media (max-width: ${({ theme }) => theme.queries.deskMid}){
    flex-direction: ${({ feature }) => feature ? 'column' : 'column-reverse'};
    background-position: ${({ feature }) => feature ? 'left 100px' : 'right 170px'} ;
    text-align:center;


}
@media (max-width: ${({ theme }) => theme.queries.tablet}){
    background-size: 500px  ;

    padding: 50px 32px 100px;
    background-position: ${({ feature }) => feature ? 'left 180px' : 'right 110px'} ;

}
@media (max-width: ${({ theme }) => theme.queries.mobile}){
    background-size: 350px ;


    background-position:  ${({ feature }) => feature ? 'left 220px' : 'right 100px'} ;

}
@media (max-width: ${({ theme }) => theme.queries.mobileMid}){
    background-size: 300px ;

    background-position:  ${({ feature }) => feature ? 'left 220px' : 'right 100px'} ;
}
@media (max-width: ${({ theme }) => theme.queries.mobileSmall}){
    background-size: 250px;

    background-position:  ${({ feature }) => feature ? 'left 180px' : 'right 100px'} ;
}

@media (max-width: ${({ theme }) => theme.queries.mobileMini}){
    background-size: 200px  ;
    background-position:  ${({ feature }) => feature ? 'left 180px' : 'right 100px'} ;
}
@media (max-width: ${({ theme }) => theme.queries.mobileMin}){
 
    background-position:  ${({ feature }) => feature ? 'left 140px' : 'right 100px'} ;
}


`
export const HeroLeft = styled.div`
    margin-top:  ${({ feature }) => feature ? '100px' : 'none'} ;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const HeroIntroTitle = styled.p`
font-size: 12px;
padding: 0px 3px;
border-radius: 3px;
width: 150px;
margin: auto;
background-color:  ${({ theme }) => theme.colors.yellow};
color:  ${({ theme }) => theme.colors.white};
`

export const HeroTitle = styled.h1`
color:  ${({ theme }) => theme.colors.white};
font-weight: 300;
margin-top: -20px;
`

export const HeroSubTitle = styled.h1`
color:  ${({ theme }) => theme.colors.yellow};
font-weight: 500;
margin-top: -30px;

`

export const HeroParagraph = styled.p`
color:  ${({ theme }) => theme.colors.white};
margin-top: -15px;
`

export const HeroRight = styled.div`


`

export const HeroCta = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: -10px;
    @media (max-width: ${({ theme }) => theme.queries.deskMid}){
        justify-content: center;
    }

`
export const HeroImage = styled.img`
    height: 400px;
    width: 400px;

`

