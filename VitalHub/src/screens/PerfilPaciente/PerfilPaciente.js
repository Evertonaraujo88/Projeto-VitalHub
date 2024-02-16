
import { FotoPaciente } from "../../components/FotoPaciente/Style";
import { Title } from "../../components/Title/Style";
import { Text } from "../../components/Text/Text";
import { ContainerDados, ContainerForm, ContainerScroll, ScrollForm } from "./Style";
import { BoxInput } from "../../components/BoxInput/BoxInput";
import { Label } from "../../components/Label/Label";
import { InputPerfil } from "../../components/Input/Style";

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
     
      <ContainerForm>
         
         <Label 
         textLabel={'Data de nascimento:'}/>

         <InputPerfil
         placeHolder={'ex.: 00/00/0000'}/>
        {/*  <BoxInput
         textLabel= "Data de Nascimento:"
         placeHolder= "ex.: 00/00/0000"
         /> */}

      </ContainerForm>

    </ContainerScroll>
  );
};
