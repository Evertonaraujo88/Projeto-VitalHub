import styled from "styled-components";

export const ContainerCardsListClinic = styled.View`
    width: 90%;
    padding: 18px 18px;
    border-radius: 5px;
   
    background-color: #FFFFFF;
    gap: 10px;
    margin: 12px auto;
    
`

export const TextClinic = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 16px;
    color: #33303E;
`

export const ContainerNote = styled.View`
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    flex-direction: row;

    
`
export const ConteinerService = styled(ContainerNote)`
    background-color: #E8FCFD;
    padding: 4px;

    border-radius: 5px;
`

export const TextNote = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 14px;
    color: #F9A620;
`

export const TextBairro = styled(TextNote)`
    color: #4E4B59;
`
export const TextService = styled(TextNote)`
    color: #49B3BA;
    
`
