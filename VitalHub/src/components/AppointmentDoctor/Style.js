import styled from "styled-components";
import { ContainerCardsListClinic } from "../AppointmentClinic/Style";

export const ContainerCardsListDoctor = styled(ContainerCardsListClinic)`
    flex-direction: row;
    width: 90%;
    padding: 10px 10px;
    border-radius: 5px;
   
    background-color: #FFFFFF;
    gap: 10px;
    margin: 12px auto;
`

export const ImageDoctor =styled.Image`
    width: 77px;
    height: 80px;

    border-radius: 5px;

`

export const ViewColumn = styled.View`
    width: 100%;
    justify-content: center;
    gap: 10px;

    margin-left: 10px;

    
`
export const TextEspecialidade = styled.Text`
    font-family: Quicksand_500Medium;
    font-size: 14px;
    color: #8C8A97;
`