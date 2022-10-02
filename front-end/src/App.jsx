import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
import BgImage from './assets/index-image.jpg'
import { Container, Content, Title, SubTitle } from "./App.styles";
import './global.css';
import { useEffect, useState } from 'react';
import api from './services/api';
import imageMobile from './assets/index-image-mobile.jpg'


export function App() {
  const [dataTable, setDataTable] = useState([]);
    
  useEffect(() => {
      loadApi()
  }, [])

  async function loadApi() {
      try{
      const { data } = await api.get('/all');
      setDataTable(data);
      
  } catch(e){
      console.log(e);
  }
  }

  return (
    <>
      <Container BgImage={BgImage} imageMobile={imageMobile}>
        <Header />
        <Content>
          <Title>ESTÁGIO</Title>
          <SubTitle>PROVA DE SELEÇÃO</SubTitle>
        </Content>
      </Container>
      <Form dataTable={dataTable} setDataTable={setDataTable}/>
      <Footer />
    </>
  )
}


