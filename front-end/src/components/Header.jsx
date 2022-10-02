import { useState } from 'react';
import Logo from '../icones/logo-in8-dev.svg'
import {Container, LogoIN8, BoxMenu, ListMenu, ButtonHamburger, ContainerMenu, ListMenuHamburger, ImgHamburger} from './Header.styles';
import HamburguerClose from '../icones/hamburguer.svg';
import HamburguerOpen from '../icones/hamburguer-aberto0.svg';

export function Header() {
    const [menu, setMenu ] = useState(false);

    function handleOptionMenu (){
        setMenu(!menu);
    }

    return(
        <Container>
            <LogoIN8 src={Logo}/>
            <ButtonHamburger onClick={handleOptionMenu} open={menu}><img src={HamburguerClose} style={{ width: '2rem'}}/></ButtonHamburger>
            
                {menu === true && (
                    <ContainerMenu>
                        <ButtonHamburger onClick={handleOptionMenu}> <ImgHamburger src={HamburguerOpen} /></ButtonHamburger>
                        <ListMenuHamburger >Lista</ListMenuHamburger>
                        <ListMenuHamburger >Sobre mim</ListMenuHamburger>
                        <ListMenuHamburger >Cadastro</ListMenuHamburger>
                    </ContainerMenu>
                )}
            
            <BoxMenu>
                <ListMenu style={{listStyle: 'none'}}><a href="" style={{color: 'white'}}>Cadastro</a></ListMenu>
                <ListMenu>Lista</ListMenu>
                <ListMenu>Sobre mim</ListMenu>
            </BoxMenu>
        </Container>
    )
}