import { ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../../components/Botao/Style"
import { Container } from "../../components/Container/Style"
import { ButtonSalvar } from "../ProntuarioMedico/Style"
import { ContentButtons, TitleSelect } from "../SelecionarClinica/Style"


export const SelecionarData = () => {

    return(
        <Container>
        <TitleSelect>Selecionar Data</TitleSelect>
  
        
  
        <ContentButtons>
          <ButtonSalvar /* onPress={() => { setSelecionarClinica(true) }} */>
            <ButtonTitle>CONTINUAR</ButtonTitle>
          </ButtonSalvar>
  
          <ButtonCancel /* onPress={() => setShowModalQuery(false)} */>
            <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
          </ButtonCancel>
        </ContentButtons>
      </Container>
    )
}