import { ButtonSalvar } from "../../screens/ProntuarioMedico/Style";
import { TitleSelect } from "../../screens/SelecionarClinica/Style";
import { ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../Botao/Style";
import { AlignBoxModal, BoxSchedulingModal, ContentModal, ContentModalSchedulingBox, DateBox, DoctorBox, ModalScheduling, SubTitle, TextDefault, TitleTextInfo } from "./Style";

export const SchedulingModal = ({
  visible,
  setShowModalScheduling,
  ...rest
}) => {
  return (
    <ModalScheduling
      {...rest}
      visible={visible}
      transparent={true}
      animationType="fade"
    >
      <ContentModal>
        <BoxSchedulingModal>
          <ContentModalSchedulingBox>

            <TitleSelect>Agendar consulta</TitleSelect>

            <SubTitle>
              Consulte os dados selecionados para a sua consulta
            </SubTitle>

            <DateBox>
              <TitleTextInfo>Data da consulta</TitleTextInfo>
              <TextDefault>1 de Novembro de 2023</TextDefault>
            </DateBox>

            <DoctorBox>
              <TitleTextInfo>Médico(a) da consulta</TitleTextInfo>
              <TextDefault>Dra Alessandra</TextDefault>
              <TextDefault>Demartologa, Esteticista</TextDefault>
            </DoctorBox>

            <DoctorBox>
              <TitleTextInfo>Local da consulta</TitleTextInfo>
              <TextDefault>São Paulo, SP</TextDefault>
            </DoctorBox>

            <DoctorBox>
              <TitleTextInfo>Tipo da consulta</TitleTextInfo>
              <TextDefault>Rotina</TextDefault>
            </DoctorBox>
          </ContentModalSchedulingBox>

          <AlignBoxModal>
            <ButtonSalvar>
              <ButtonTitle>Confirmar</ButtonTitle>
            </ButtonSalvar>

            <ButtonCancel onPress={() => setShowModalScheduling(false)}>
              <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
            </ButtonCancel>
          </AlignBoxModal>
        </BoxSchedulingModal>
      </ContentModal>
    </ModalScheduling>
  );
};
