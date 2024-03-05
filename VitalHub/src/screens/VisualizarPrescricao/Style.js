import styled from "styled-components";
import { ContainerScrollProntuario } from "../ProntuarioMedico/Style";
import { ContainerDados } from "../PerfilPaciente/Style";
import { AddressBox } from "../../components/AppointmentLocation/Style";

export const FotoMedico = styled.Image`
    width: 100%;
    height:280px;

`
export const AddressBoxPrescricao = styled(AddressBox)`
    width: 100%;

`
export const InputQuery = styled.TextInput.attrs({
    placeholderTextColor:'#33303E',
})`
    width: 100%;
    height: 53px;
    border-radius: 5px;
    background-color: #F5F3F3 ;
    padding-left: 16px;
    font-family: Quicksand_500Medium;
    font-size: 14px; 
    margin-top: 10px; 
    
`

export const ContainerScrollPrescricao = styled(ContainerScrollProntuario)`
    background-color: white;
`