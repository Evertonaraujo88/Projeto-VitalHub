import { Modal } from "react-native";
import {
  ButtonTextQuery,
  FilterQuery,
  InputDescricaoQuery,
  ModalContentQuery,
  QueryContent,
  TitleQuery,
} from "./Style";
import { Title } from "../Title/Style";
import { Label } from "../Label/Label";
import { ModalContent } from "../AppointmentModal/Style";
import { ButtonCancel, ButtonQuery, ButtonSecondaryTitle } from "../Botao/Style";
import { ButtonSalvar, InputDescricao } from "../../screens/ProntuarioMedico/Style";
import { ButtonTitle } from "../BotaoTitulo/Style";
import { useState } from "react";
import { SelecionarClinica } from "../../screens/SelecionarClinica/SelecionarClinica";

export const QueryModal = ({ visible, setShowModalQuery, ...rest }) => {

  const [selecionarClinica, setSelecionarClinica] = useState(false);

  return (

    <Modal {...rest} visible={visible} transparent={true} animationType="fade"
    >
      <QueryContent>
        <ModalContentQuery>
          <TitleQuery>Agendar consulta</TitleQuery>

          <Label textLabel={"Qual o nível da consulta"} />

          <FilterQuery>
            <ButtonQuery>
              <ButtonTextQuery>Rotina</ButtonTextQuery>
            </ButtonQuery>

            <ButtonQuery>
              <ButtonTextQuery>Exame</ButtonTextQuery>
            </ButtonQuery>

            <ButtonQuery>
              <ButtonTextQuery>Urgência</ButtonTextQuery>
            </ButtonQuery>
          </FilterQuery>

          <Label textLabel={"Informe a localização desejada"} />
          <InputDescricaoQuery placeholder="Informe a localização" />

          <ButtonSalvar onPress={() => {setSelecionarClinica(true)}}>
            <ButtonTitle>CONTINUAR</ButtonTitle>
          </ButtonSalvar>

       
          <ButtonCancel onPress={() => setShowModalQuery(false)}>
            <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
          </ButtonCancel>
        </ModalContentQuery>
      </QueryContent>
    </Modal>
  );
};
