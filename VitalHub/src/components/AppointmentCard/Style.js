
import styled from "styled-components";
import {Title} from '../Title/Style'

export const ContainerCardsList = styled.View`
    width: 90%;
    margin-bottom: 12px;
    padding: 10px 10px;
    border-radius: 5px;
    flex-direction: row;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.08);
    background-color: #FFFFFF;
    gap: 10px;
    margin: 0 auto;


`

export const ProfileImage = styled.Image`
width: 77px;
height: 80px;

border-radius: 5px;
`

export const ContentCard = styled.View`
    width: 70%;

`
export const DataProfileCard = styled.View`

`
export const ProfileName = styled(Title)`
    font-size: 16px;
`

export const ProfileData = styled.View`
    flex-direction: row;
    gap: 15px;

`
export const TextAge = styled.Text`
    font-size: 14px;
    font-family: Quicksand_400Regular;
    color: #8C8A97;

`
export const TextBold = styled(TextAge)`
    font-family: Quicksand_600SemiBold;
    
`

export const ViewRow = styled.View`
    width: 100%;
  
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ClockCard = styled.View`
    flex-direction: row;
    padding: 4px 23px;
    align-items: center;
    justify-content: center;
   
    
    border-radius: 5px;
    gap: 6px;

    align-items: center;
    background-color: ${(props) => props.situaco == "pendente" ? "#E8FCFD" : "#F1F0F5"};
`
export const TextBoldClock = styled(TextBold)`
    color: #49B3BA;
`

export const ButtonCard = styled.TouchableOpacity`

`
export const Buttonext = styled.Text`
    font-family: MontserratAlternates_500Medium;
    font-size: 12px;
    color: ${(props) => props.situacao == "pendente" ? "#c81d25" : "#344f8f"};
    text-decoration: underline;
`