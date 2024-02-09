import { Container, ContainerLogo } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Fontisto } from '@expo/vector-icons';
import { Title } from "../../components/Title/Style";
import { Text } from "../../components/Text/Text";
import { Input } from "../../components/Input/Style";
import { Button, ButtonNovaSenha } from "../../components/Botao/Style";
import { ButtonTitle } from "../../components/BotaoTitulo/Style";

export const NovaSenha = ({navigation}) => {
    return(
        <Container>

                <ContainerLogo>
                
                <Fontisto name="close" size={30} color="#34898F" />
                <Logo source= {require(`../../assets/images/VitalHub_Logo1.png`)}/>

                </ContainerLogo>

                <Title>Redefinir senha</Title>

                <Text>Insira e confirme a sua nova senha</Text>

                <Input
                    placeholder = 'Nova Senha'
                    secureTextEntry
                />

                <Input
                    placeholder = 'Confirmar nova senha'
                    secureTextEntry
                />

                <ButtonNovaSenha>
                    <ButtonTitle>CONFIRMAR NOVA SENHA</ButtonTitle>
                </ButtonNovaSenha>
                

        </Container>
    );
}