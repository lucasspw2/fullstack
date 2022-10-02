import bgFooter from '../assets/rodape-desktop.jpg';
import { ContainerFooter, ContentFooter, FooterText } from './Footer.styles';
import bgMobile from '../assets/rodape-mobile.jpg'

export function Footer() {
    return (
        <ContainerFooter bgFooter={bgFooter} bgMobile={bgMobile}>
            <ContentFooter>            
                <FooterText>Fulano Beltrano de Oliveira da Silva</FooterText>
                <FooterText >fulanobos@gmail.com</FooterText>
                <FooterText>(31) 9 9666-1111</FooterText>
                <FooterText>Faculdade de Belo Horizonte</FooterText>
            </ContentFooter>
        </ContainerFooter>
    )
}