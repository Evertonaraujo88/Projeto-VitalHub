import { Button, View } from "react-native";
import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { LinkMedium } from "../../components/Links/Style";

export const Login = ({navigation}) => {
    return (
           <Container>

                <Logo source= {require(`../../assets/images/VitalHub_Logo1.png`)}/>

                <Title>Entrar ou criar conta</Title>

                <Input
                    placeholder = 'E-mail'
                />

                <Input
                    placeholder = 'senha'
                    seureTextEntry
                />

                <LinkMedium>Esqueceu sua senha?</LinkMedium>

                {/* <Button>
                    <ButtonTitle></ButtonTitle>
                </Button> */}

               {/*  <ButtonGoogle>
                    <ButtonTitleGoogle></ButtonTitleGoogle>
                </ButtonGoogle> */}

               {/*  <ContainerAccount>
                    <TextAccount></TextAccount>
                </ContainerAccount> */}

           </Container>
    );
}