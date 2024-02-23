import styled from "styled-components";
import { Input } from "../../components/Input/Style";
import { RowTextModal } from "../../components/AppointmentModal/Style";
import { ScrollView } from "react-native";
import { ButtonNovaSenha } from "../../components/Botao/Style";

export const ContainerScrollProntuario = styled.View`
    width: 100%;

    align-items: center;
    
  
`

export const InputDescricao = styled(Input)`
    width: 100%;
    height: 121px;
    
    padding: 16px;
    margin-top: 10px;
    margin-bottom: 20px;
`
export const RowTextProntuario = styled(RowTextModal)`
    margin-bottom: 24px;
`

export const InputDiagnostico = styled(InputDescricao)`
    height: 53px;
`
export const ButtonSalvar = styled(ButtonNovaSenha)`
    width: 100%;
`

