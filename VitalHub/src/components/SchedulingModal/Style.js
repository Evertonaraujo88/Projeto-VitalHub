import { Modal } from "react-native";
import styled from "styled-components";

export const ModalScheduling = styled(Modal)`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
    background-color: white;

`

export const ContentModal = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.6);
`

export const BoxSchedulingModal = styled.View`
    width: 92%;
    height: 86%;
    background-color: white;
    border-radius: 10px;
    align-items: center;
`

export const ContentModalSchedulingBox = styled.View`
    height: 74%;
    width: 85%;
    align-items: center;
`

export const SubTitle = styled.Text`
    font-family: Quicksand_500Medium;
    font-size: 16px;
    text-align: center;
    margin-top: 16px;
`

export const TitleTextInfo = styled.Text`
    width: 100%;
    color: #33303E;
    font-family: Quicksand_600SemiBold;
    font-size: 16px;
      
`
export const TextDefault = styled.Text`
    color: #4E4B59;
    font-family: Quicksand_500Medium;
    font-size: 14px;
`

export const AlignBoxModal = styled.View`
    width: 85%;
`

export const AlignButton = styled(AlignBoxModal)`
`

export const DateBox = styled.View`
    width: 100%;
    margin-top: 30px;
    gap: 8px;
`

export const DoctorBox = styled.View`
    width: 100%;
    margin-top: 20px;
    gap: 8px;
`