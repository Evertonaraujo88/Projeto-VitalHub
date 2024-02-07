
import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";

import { Text } from "../../components/Text/Text";
import { Input, InputReperar } from "../../components/Input/Style";
import { Button } from "../../components/Botao/Style";
import { ButtonTitle } from "../../components/BotaoTitulo/Style";

export const RecuperarSenha = ({navigation}) => {
    return (
            <Container>

                <Logo source= {require(`../../assets/images/VitalHub_Logo1.png`)}/>

                <Title>Recuperar Senha</Title>

               
                <Text>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Text>
                
                <InputReperar
                    placeholder = 'Usuário ou E-mail'
                />

                <Button>
                    <ButtonTitle>ENTRAR</ButtonTitle>
                </Button>
                
            </Container>
    );
}