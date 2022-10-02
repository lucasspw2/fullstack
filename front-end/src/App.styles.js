import styled from 'styled-components';

export const Container = styled.section`
    background: ${(props) => `url(${props.BgImage})` };
    height: 50rem;
    background-size: cover;
    background-position: center;
    object-fit: none;
    background-repeat: no-repeat;
    
    @media (max-width: 700px) {
        background: ${(props) => `url(${props.imageMobile})` };
        background-size: cover;
        background-position: center;
        object-fit: none;
        background-repeat: no-repeat;
    }

`;

export const Content = styled.main`
    display: flex; 
    flex-direction: column;
    color: white;
    margin-left: 20%;
    margin-top: 15%;
`;

export const Title = styled.span`
    font-size: 5rem;
    font-family: 'Helvetica 25';

`;

export const SubTitle = styled.span`
    font-size: 2.7rem;
    font-family: 'Helvetica 25';

`;