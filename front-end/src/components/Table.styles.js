import styled from 'styled-components';


export const TitleTable = styled.h1`
    margin-top: 3rem;
    text-align: center;
    font-size: 3rem;
    font-weight: 100;
    color: #29abe2;
    font-family: 'Helvetica 25';
`;

export const Container = styled.div`
    margin: 5rem;
    @media (max-width: 768px) {
        margin: 0.5rem;
    }
`;

export const Th = styled.th`
    border: 1px solid #29abe2;
    border-top: 0;
    padding: 20px;
    text-align: center;
    width: 10rem; 
    color: #012d51;
    font-size: 1rem;
    @media (max-width: 768px) {
        padding: 5px;
        font-size: 0.7rem;
  }

`;

export const Td = styled.td`
    border: 1px solid #29abe2;
    font-size: 1rem;
    border-top: 0;
    padding: 20px;
    text-align: center;
    color: #808080;
    
    @media (max-width: 768px) {
        padding: 10px;
        font-size: 0.7rem;
  }
    

`;

export const TableContent = styled.table`
    border-collapse: collapse;
    margin: auto;
    border: 0;

    @media (max-width: 768px) {
        margin-top: 2rem;
        border: 1px solid #29abe2;
  }
`