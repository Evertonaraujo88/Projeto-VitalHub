import { ButtonNovaSenha } from "../../components/Botao/Style";
import { ButtonTitle } from "../../components/BotaoTitulo/Style";
import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { LinKBold } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { Text } from "../../components/Text/Text";
import { Title } from "../../components/Title/Style";
import { ContentAccount } from "../Login/Style";

export const Cadastro = ({navigation}) => {
    return(
        <Container>
            <Logo source= {require(`../../assets/images/VitalHub_Logo1.png`)}/>

            <Title>Criar conta</Title>

            <Text>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Text>

            <Input
                    placeholder = 'Usuário ou E-mail'
            />
            <Input
                    placeholder = 'senha'
                    secureTextEntry
            />
            <Input
                    placeholder = 'Confirmar senha'
                    secureTextEntry
            />

            <ButtonNovaSenha>
                <ButtonTitle>CADASTRAR</ButtonTitle>
            </ButtonNovaSenha>

            <ContentAccount>

                <LinKBold>Cancelar</LinKBold>
                   
            </ContentAccount>
        </Container>
    );
}