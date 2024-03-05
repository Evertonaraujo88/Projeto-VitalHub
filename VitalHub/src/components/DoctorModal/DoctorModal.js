import { ButtonSalvar } from "../../screens/ProntuarioMedico/Style";
import { TitleSelect } from "../../screens/SelecionarClinica/Style";
import { ButtonSecondaryTitle, ButtonTitle } from "../Botao/Style";

import { AlignBoxModal, ContentModal, ModalScheduling } from "../SchedulingModal/Style";
import { ButtonCancel, ButtonSchedule } from "../button/style";

import { BoxInfoDoctor, ContainerBoxModal, ContentModalDoctor, DoctorImage, InfoTextProfile } from "./Style";

export const DoctorModal = ({ visible, setShowModalDoctor, ...rest }) => {
  return (
    <ModalScheduling
      {...rest}
      visible={visible}
      transparent={true}
      animationType="fade"
    >
      <ContentModal>
        <ContainerBoxModal>
          <ContentModalDoctor>
            <DoctorImage
              source={{ uri: "https:/github.com/evertonaraujo88.png" }}
            />

            <TitleSelect>Dr. Claudio</TitleSelect>

            <BoxInfoDoctor>
              <InfoTextProfile>Cliníco geral</InfoTextProfile>
              <InfoTextProfile>CRM-15286</InfoTextProfile>
            </BoxInfoDoctor>
          </ContentModalDoctor>

          <AlignBoxModal>
            <ButtonSalvar>
              <ButtonTitle>Ver local da consulta</ButtonTitle>
            </ButtonSalvar>

            <ButtonCancel onPress={() => setShowModalDoctor(false)}>
              <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
            </ButtonCancel>
          </AlignBoxModal>

          
        </ContainerBoxModal>
      </ContentModal>
    </ModalScheduling>
  );
};
