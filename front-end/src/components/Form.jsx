import {useState} from 'react';
import { Table } from './Table';
import api from '../services/api';


import { Container, TitleForm, FormContent, Input, Label, BoxButton, ButtonSubmit } from "./Form.styles"

export function Form({dataTable, setDataTable}) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        nascimento: '',
        telefone: ''
    });

    const [message, setMessage] = useState('');

   async function handleSubmit(event){
        event.preventDefault();
        if(formData.name !== '' && formData.email !== '' && formData.nascimento !== '' && formData.telefone !== '' ){
            try{
            const response = await api.post("/register", formData);
            
            setDataTable(response.data);
            
            setMessage('Formulário enviado com sucesso');
            
            setFormData({
                name: '',
                email: '',
                nascimento: '',
                telefone: ''
            })
        } catch(e){
            console.log(e);
        }

        }else {
            return setMessage('Preencha o formulario');
        }
    }

    function handleChangeInputForm(event){
        setMessage('');
        setFormData({...formData, [event.target.name] : event.target.value })
    }

    return(
        <>
        <Container>  
            <TitleForm>CADASTRO</TitleForm>
            {message && ( <span>{message}</span>)}
            <FormContent>
                <Label>Nome</Label>
                <Input 
                    type="text"
                    name="name"
                    required
                    onChange={(e) => handleChangeInputForm(e)}
                    value={formData.name}
                />

                <Label>Email</Label>
                <Input 
                    type="email"
                    name="email" 
                    required
                    onChange={(e) => handleChangeInputForm(e)}
                    value={formData.email}
                />

                <Label>Nascimento</Label>
                <Input 
                    name="nascimento"
                    type="text" 
                    required
                    onChange={(e) => handleChangeInputForm(e)}
                    value={formData.nascimento}
                />

                <Label>Telefone</Label>
                <Input 
                    name="telefone"
                    type="text" 
                    required
                    onChange={(e) => handleChangeInputForm(e)}
                    value={formData.telefone}
                />
                
                <BoxButton>
                    <ButtonSubmit type="submit" onClick={handleSubmit}>CADASTRAR</ButtonSubmit>
                </BoxButton>
            </FormContent>
            
        </Container>
        <Table dataTable={dataTable}/>
        </>
    )   
}