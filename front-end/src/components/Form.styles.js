import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    background: #29abe2;
    
    @media (max-width: 768px) {
        padding: 1rem;
  }

`;

export const TitleForm = styled.span`
    color: white;
    font-size: 2rem;
    margin: 2rem 0;
    font-family: 'Helvetica 25';
`;

export const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: 25rem;
    color: white;
    @media (max-width: 700px) {
        margin: 0 1rem;
        width: 100%;
  }

`;

export const Input = styled.input`
    background: transparent;
    border: 0;
    width: 100%;
    border-bottom: 2px solid white;
    margin: 0.5rem 0;
    color: white;
    font-family: 'Helvetica Condensed';

`;

export const Label = styled.label`
    margin-top: 0.25rem;
    font-family: 'Roboto';
    
    

`;

export const BoxButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
`;


export const ButtonSubmit = styled.button`
    justify-content: center;
    padding: 1.5rem;
    color: #29abe2;
    font-size: 2rem;
    background: #012d51;
    line-height: 0;
    border: 1px solid black;
    font-family: 'Helvetica 25';
    cursor: pointer;

`;