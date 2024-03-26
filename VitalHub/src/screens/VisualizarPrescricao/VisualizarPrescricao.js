import { ScrollView } from "react-native";
import {
  ContainerScrollProntuario,
  RowTextProntuario,
} from "../ProntuarioMedico/Style";
import { AddressBoxPrescricao, ContainerScrollPrescricao, FotoMedico, InputQuery } from "./Style";
import { ContainerDados, ScrollForm } from "../PerfilPaciente/Style";
import { Title } from "../../components/Title/Style";
import { TextModal } from "../../components/AppointmentModal/Style";
import { AddressBox } from "../../components/AppointmentLocation/Style";
import { TitleTextInfo } from "../../components/SchedulingModal/Style";

export const VisualizarPrescricao = () => {
  return (
    <ScrollView>
      <ContainerScrollPrescricao>
        <FotoMedico source={{ uri: "https:/github.com/evertonaraujo88.png" }} />

        <ScrollForm>
          <ContainerDados>
            <Title>Dr. Everton</Title>

            <RowTextProntuario>
              <TextModal>Cliníco geral</TextModal>

              <TextModal>CRM-15286</TextModal>
            </RowTextProntuario>
          </ContainerDados>

          <AddressBoxPrescricao>
            <TitleTextInfo>Descrição da consulta</TitleTextInfo>
            <InputQuery
                
                multiline={true}
              placeholder="O paciente possuí uma infecção no
                            ouvido. Necessário repouse de 2 dias
                            e acompanhamento médico constante"

            />
          </AddressBoxPrescricao>

          <AddressBoxPrescricao>
            <TitleTextInfo>Diagnóstico do paciente</TitleTextInfo>
            <InputQuery placeholder="Diagnóstico do paciente" />
          </AddressBoxPrescricao>
        </ScrollForm>
      </ContainerScrollPrescricao>
    </ScrollView>
  );
};
