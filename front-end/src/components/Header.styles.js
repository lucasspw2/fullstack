import styled from 'styled-components';


export const Container = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    margin: 0 2rem;
    padding: 1rem;

    @media (max-width: 768px) {
        flex-direction: row-reverse;
        justify-content: ${ props => props.open ?   'space-around' : 'space-between'}
  }
`;

export const LogoIN8 = styled.img`
    width: 9rem;

`;

export const BoxMenu = styled.ul`
    display: flex;
    @media (max-width: 768px) {
        display: none;
  }
    
`;

export const ListMenu = styled.li`
    padding-right: 2rem;
    cursor: pointer;
    
`;


export const ButtonHamburger = styled.button`
    background: transparent;
    border: 0;
    display: none;
    @media (max-width: 768px) {
        display: ${(props) => props.open ?   'none': 'block' };
  }
`;


export const ContainerMenu = styled.div`
    @media (max-width: 768px) {
        margin: 0;
        padding: 0;
        position: absolute;
        top: 0;
        left: 5%;
        padding: 2rem;
        background: #29abe2;    
  }
 

`;

export const ListMenuHamburger = styled.li`
    list-style: none;
    padding: 0.5rem 0;
`

export const ImgHamburger = styled.img`
    width: 2rem;
    color: white;
`;