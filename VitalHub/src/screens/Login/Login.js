
import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { LinKBold, LinkMedium } from "../../components/Links/Style";
import { Button, ButtonGoogle} from "../../components/Botao/Style";
import { ButtonTitle, ButtonTitleGoogle } from "../../components/BotaoTitulo/Style";
import { GOOGLE } from "../../components/Google/Style";

import { AntDesign } from '@expo/vector-icons';
import { ContentAccount, TextAccount } from "./Style";

export const Login = ({navigation}) => {

    async function Login(){
        navigation.navigate("Main")
    }

    return (
           <Container>

                <Logo source= {require(`../../assets/images/VitalHub_Logo1.png`)}/>

                <Title>Entrar ou criar conta</Title>

                <Input
                    placeholder = 'Usuário ou E-mail'
                />

                <Input
                    placeholder = 'senha'
                    secureTextEntry
                />

                <LinkMedium>Esqueceu sua senha?</LinkMedium>

                <Button onPress ={()=> Login()}>
                    <ButtonTitle>ENTRAR</ButtonTitle>
                </Button>

               <ButtonGoogle>
                   {/*  <GOOGLE source={require(`../../assets/images/GOOGLE.png`)}/> */}
                   <AntDesign name="google" size={19} color="#496BBA" />
                    <ButtonTitleGoogle>
                        ENTRAR COM GOOGLE
                    </ButtonTitleGoogle>
                </ButtonGoogle>

               <ContentAccount>
                    <TextAccount>
                        Não tem conta? <LinKBold>Crie uma conta agora!</LinKBold>
                    </TextAccount>
                </ContentAccount>

           </Container>
    );
}