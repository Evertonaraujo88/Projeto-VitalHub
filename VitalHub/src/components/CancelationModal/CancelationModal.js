import { Modal } from "react-native";
import { Title } from "../Title/Style";
import { Text } from "../../components/Text/Text";
import { Buttonext } from "../AppointmentCard/Style";
import { ButtonCancel, ButtonNovaSenha, ButtonSecondary, ButtonSecondaryTitle } from "../Botao/Style";
import { ContentAccount } from "../../screens/Login/Style";
import { LinKBold } from "../Links/Style";
import { ContainerModal, PatientModal } from "./Style";
import { ButtonTitle } from "../BotaoTitulo/Style";

export const CancelationModal = ({ navigation, visible, setShowModalCancel, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ContainerModal>
          <Title>Cancelar consulta</Title>

          <Text>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </Text>

          {/* Botao reutilizado da screen nova senha */}
          <ButtonNovaSenha>
            <ButtonTitle>confirmar</ButtonTitle>
          </ButtonNovaSenha>

          <ButtonCancel  onPress={() => setShowModalCancel(false)}>
            <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
          </ButtonCancel >
        </ContainerModal>
      </PatientModal>
    </Modal>
  );
};
