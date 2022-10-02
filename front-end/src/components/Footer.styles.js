import styled from 'styled-components';


export const ContainerFooter = styled.footer`
    background: ${ props => `url(${props.bgFooter})`};
    background-size: cover;
    background-position: center;
    object-fit: none;
    background-repeat: no-repeat;

    @media (max-width: 700px) {
        background: ${ props => `url(${props.bgMobile})`};
        background-size: cover;
        background-position: center;   
  }   

`;

export const ContentFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    padding: 3rem; 
    color: white;

`;

export const FooterText = styled.p`
    padding-bottom: 0.75rem;
`;