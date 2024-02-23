import { ScrollView } from "react-native";
import {
  RowTextModal,
  TextModal,
} from "../../components/AppointmentModal/Style";
import { ButtonCancel, ButtonNovaSenha, ButtonSecondaryTitle } from "../../components/Botao/Style";
import { ButtonTitle } from "../../components/BotaoTitulo/Style";
import { FotoPaciente } from "../../components/FotoPaciente/Style";
import { Input } from "../../components/Input/Style";
import { Label } from "../../components/Label/Label";
import { Text } from "../../components/Text/Text";
import { Title } from "../../components/Title/Style";
import {
  ContainerDados,
  ContainerScroll,
  ScrollForm,
} from "../PerfilPaciente/Style";
import { ButtonSalvar, ContainerScrollProntuario, InputDescricao, InputDiagnostico, RowTextProntuario } from "./Style";

export const ProntuarioMedico = ({ navigation }) => {
  return (
    <ScrollView>

       <ContainerScrollProntuario>
      <FotoPaciente source={require(`../../assets/images/fotoPaciente.png`)} />

      <ScrollForm>
        <ContainerDados>
          <Title>Richard Kosta</Title>

          <RowTextProntuario>
            <TextModal>22 anos</TextModal>

            <TextModal>richard.kosta@gmail.com</TextModal>
          </RowTextProntuario>
        </ContainerDados>

        <Label textLabel={"Descrição da Consulta"} />
        <InputDescricao placeholder="Descrição" />

        <Label textLabel={"Diagnóstico do paciente"} />
        <InputDiagnostico  placeholder="Diagnóstico" />
        
        <Label textLabel={"Prescrição médica"} />
        <InputDescricao placeholder="Prescrição médicaDescrição" />

        <ButtonSalvar>
            <ButtonTitle>SALVAR</ButtonTitle>
        </ButtonSalvar>

        <ButtonCancel>
            <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
        </ButtonCancel>

      </ScrollForm>
    </ContainerScrollProntuario>
    </ScrollView>
   
  );
};
