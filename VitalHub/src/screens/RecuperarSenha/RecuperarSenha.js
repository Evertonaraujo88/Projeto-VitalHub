
import { Container, ContainerLogo } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";

import { Text } from "../../components/Text/Text";
import { Input, InputReperar } from "../../components/Input/Style";
import { Button } from "../../components/Botao/Style";
import { ButtonTitle } from "../../components/BotaoTitulo/Style";
import { Entypo } from '@expo/vector-icons';

export const RecuperarSenha = ({navigation}) => {

    async function Login(){
        navigation.navigate("Login")
    }

    async function Codigo(){
        navigation.navigate("Codigo")
    }

    return (
            <Container>
                <ContainerLogo>

                <Entypo onPress ={()=> Login()} name="arrow-with-circle-left" size={30} color="#34898F" />

                <Logo source= {require(`../../assets/images/VitalHub_Logo1.png`)}/>

                </ContainerLogo>
                

                <Title>Recuperar Senha</Title>

               
                <Text>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Text>
                
                <InputReperar
                    placeholder = 'Usuário ou E-mail'
                />

                <Button onPress ={()=> Codigo()}>
                    <ButtonTitle  >CONTINUAR</ButtonTitle>
                </Button>
                
            </Container>
    );
}