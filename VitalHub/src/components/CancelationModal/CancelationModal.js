import { Modal } from "react-native"
import { Title } from "../Title/Style"
import { Text } from "../../components/Text/Text";
import { Buttonext } from "../AppointmentCard/Style"
import { ButtonNovaSenha } from "../Botao/Style"
import { ContentAccount } from "../../screens/Login/Style";
import { LinKBold } from "../Links/Style";
import { ContainerModal } from "./Style";
import { ButtonTitle } from "../BotaoTitulo/Style";

export const CancelationModal = ({
    visible,
    setShowCancel,
    ...rest
}) => {
    return(
        
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <ContainerModal>

                <Title>Cancelar consulta</Title>

            <Text>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
            </Text>

            {/* Botao reutilizado da screen nova senha */}
            <ButtonNovaSenha>
                <ButtonTitle>confirmar</ButtonTitle>
            </ButtonNovaSenha>

            <ContentAccount onPress={() => setShowModalCancel(false)}>
                <LinKBold>Cancelar</LinKBold>
            </ContentAccount>

            </ContainerModal>
            

        </Modal>

    )
}