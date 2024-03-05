import styled from "styled-components";

export const MapImage = styled.Image`
    width: 100%;
    height: 45%;
`

export const ContainerBackground = styled.View`
    background-color: #F5F3F3;
    width: 100%;
    height: 100%;
`

export const ContentAL = styled.View`
    background-color: white;
    width: 100%;
    height: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding-top: 10px;
    align-items: center;
`

export const SubtextLocal = styled.Text`
    font-family: Quicksand_600SemiBold;
    font-size: 14px;
    color: #4E4B59;
    margin-top: 8px;

`

export const AddressBox = styled.View`
    margin-top: 20px;
    width: 88%;
    align-items: start;
`

export const InputGrey = styled.TextInput.attrs({
    placeholderTextColor:'#33303E',
})`
    width: 100%;
    height: 53px;
    border-radius: 5px;
    background-color: #F5F3F3;
    padding-left: 16px;
    font-family: Quicksand_500Medium;
    font-size: 14px; 
    
`

export const DoubleContentBox = styled.View`
    flex-direction: row;
    width: 100%;
    gap: 32px;
    justify-content: center;
    margin-top: 24px;   
`
export const SmallBox = styled.View`
    width: 40%;
    gap: 6px;
`
export const ButtonBox = styled.TouchableOpacity`
   width: 100%;
   align-items: center;
   margin-bottom: 35px;
`

export const AlignButton = styled.View`
    margin-top: 35px;
`

export const AlingnButtonProfile = styled.View`
    margin: 30px 0px;
`
export const LinkCancel = styled.Text`
    font-family: MontserratAlternates_600SemiBold;
    font-size: 14px;
    color: #344F8F;
    text-decoration: underline;
`