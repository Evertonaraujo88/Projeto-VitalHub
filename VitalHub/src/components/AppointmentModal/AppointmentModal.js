import { Modal } from "react-native";
import { ContainerModal } from "../CancelationModal/Style";
import { AppointmentContent, ModalContent, ModalImage, RowTextModal, TextModal } from "./Style";
import { Text } from "../../components/Text/Text";
import { ButtonCancel, ButtonNovaSenha, ButtonSecondary, ButtonSecondaryTitle } from "../Botao/Style";
import { ButtonTitle } from "../BotaoTitulo/Style";
import { Title } from "../Title/Style";
import { LinKBold } from "../Links/Style";

export const AppointmentModal = ({
  navigation,
  visible,
  setshowModalAppointment,
  typeProfile = "paciente",
  ...rest
}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <AppointmentContent>
        <ModalContent>
          <ModalImage source={{ uri: "https://github.com/ojuaum1.png" }} />

          <Title>João</Title>

          <RowTextModal>
            <TextModal>45 anos</TextModal>

            <TextModal>joão.oliveira@gmail.com</TextModal>
          </RowTextModal>

          <ButtonNovaSenha
            onPress={() => {
                setshowModalAppointment(false);
            }}
          >
            <ButtonTitle>Prontuário </ButtonTitle>
          </ButtonNovaSenha>

            <ButtonCancel onPress={() => setshowModalAppointment(false)}>
              <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
            </ButtonCancel>

        </ModalContent>
      </AppointmentContent>
    </Modal>
  );
};
