import styled from "styled-components";
import { ModalContent } from "../AppointmentModal/Style";
import { Title } from "../Title/Style";
import { InputDescricao } from "../../screens/ProntuarioMedico/Style";

export const QueryContent = styled.View`

flex: 1;
  /* width: 415px; */
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.60);
`

export const ModalContentQuery = styled(ModalContent)`
    width: 100%;
    height: 518px;

    border-radius: 10px 10px 0px 0px;
    align-items: center;
`
export const TitleQuery = styled(Title)`
    margin-bottom: 17px;
`
export const FilterQuery = styled.View`
width: 100%;

flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 20px;
margin-bottom: 20px;
`
export const ButtonTextQuery = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    color: #34898F;
`

export const InputDescricaoQuery = styled(InputDescricao)`
    height: 53px;
    margin-bottom: 100px;
`