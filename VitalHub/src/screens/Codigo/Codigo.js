
import { Container, ContainerCodigo, ContainerLogo } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Fontisto } from '@expo/vector-icons';
import { Title } from "../../components/Title/Style";
import { Text } from "../../components/Text/Text";
import { LinKBold } from "../../components/Links/Style";
import { InputCodigo } from "../../components/Input/Style";
import { ButtonTitle } from "../../components/BotaoTitulo/Style";
import { Button } from "../../components/Botao/Style";
import { ContentAccount } from "../Login/Style";

export const Codigo = ({navigation}) => {
    return (
            <Container>

                <ContainerLogo>
                
                <Fontisto name="close" size={30} color="#34898F" />
                <Logo source= {require(`../../assets/images/VitalHub_Logo1.png`)}/>
                </ContainerLogo>

                <Title>Verifique seu e-mail</Title>

                <Text>Digite o código de 4 dígitos enviado para <LinKBold>username@email.com</LinKBold></Text>

                <ContainerCodigo>
                    <InputCodigo
                    placeholder = '0'
                    />
                    <InputCodigo
                    placeholder = '0'
                    />
                    <InputCodigo
                    placeholder = '0'
                    />
                    <InputCodigo
                    placeholder = '0'
                    />
                    
                    
                </ContainerCodigo>

                <Button>
                    <ButtonTitle>ENTRAR</ButtonTitle>
                </Button>

                <ContentAccount>

                    <LinKBold>Reenviar Código</LinKBold>
                   
                </ContentAccount>

            </Container>
    );
}