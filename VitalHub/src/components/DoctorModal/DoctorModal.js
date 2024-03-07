import { ButtonSalvar } from "../../screens/ProntuarioMedico/Style";
import { TitleSelect } from "../../screens/SelecionarClinica/Style";
import { ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../Botao/Style";
import { AlignBoxModal, ContentModal, ModalScheduling } from "../SchedulingModal/Style";
import { ContentDoctor, ContainerBoxModal, DoctorImage, BoxInfoDoctor, InfoTextProfile } from "../DoctorModal/Style"


export const DoctorModal = ({ situacao, navigation, visible, setShowModalDoctor, ...rest }) => {
  
  async function handleClose(screen){
      await setShowModalDoctor (false)

      navigation.replace( screen)
    }
  return (

    
    <ModalScheduling
      {...rest}
      visible={visible}
      transparent={true}
      animationType="fade"
    >
      <ContentModal>
        <ContainerBoxModal>
            
          <ContentDoctor>
            <DoctorImage
              source={{ uri: "https:/github.com/evertonaraujo88.png" }}
            />

            <TitleSelect>Dr. Claudio</TitleSelect>

            <BoxInfoDoctor>
              <InfoTextProfile>Cliníco geral</InfoTextProfile>
              <InfoTextProfile>CRM-15286</InfoTextProfile>
            </BoxInfoDoctor>
          </ContentDoctor>

      {situacao != "pendente" ? (
            <ButtonSalvar>
              <ButtonTitle>Ver local da consulta</ButtonTitle>
            </ButtonSalvar>
      ) : (
          <></>  
      )}
          <AlignBoxModal>
            

            <ButtonCancel onPress={() => setShowModalDoctor(false)}>
              <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
            </ButtonCancel>
          </AlignBoxModal>

          
        </ContainerBoxModal>
      </ContentModal>
    </ModalScheduling>
  );
};
