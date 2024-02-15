
import { FotoPaciente } from "../../components/FotoPaciente/Style";
import { Title } from "../../components/Title/Style";
import { Text } from "../../components/Text/Text";
import { ContainerDados, ContainerScroll, ScrollForm } from "./Style";

export const PerfilPaciente = ({ navigation }) => {
  return (

    
    <ContainerScroll>

      <FotoPaciente source={require(`../../assets/images/fotoPaciente.png`)} />

      <ScrollForm>
        <ContainerDados>
            <Title>Richard Kosta</Title>
            <Text>richard.kosta@gmail.com</Text>
        </ContainerDados>

      </ScrollForm>
  {/*    
      <ContainerForm>
        <BoxInput/>
      </ContainerForm> */}

    </ContainerScroll>
  );
};
