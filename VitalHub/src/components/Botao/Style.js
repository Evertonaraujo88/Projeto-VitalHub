
import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;

    background-color: #496BBA;
    border-radius: 5px;
    border:2px solid #496BBA;

    align-items: center;
    justify-content: center;
    margin-top: 15px;
    

`

export const ButtonGoogle = styled(Button)`
    background-color: #fafafa;
    gap: 27px;
    flex-direction: row;
    justify-content: center;
    

`

export const ButtonNovaSenha = styled(Button)`
    margin-top: 30px;
`

export const ButtonSecondary = styled(Button)`
    background-color: transparent;
    border: none;
`
export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "MontserratAlternates_700Bold";
`;
export const ButtonSecondaryTitle = styled(ButtonTitle)`
text-transform: capitalize;
text-decoration: underline;
color: #344f8f;
`


export const ButtonCancel = styled.TouchableOpacity`
  width: 148px;
  height: 44px;

  margin-top: 10px;
  align-self: center;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-family: "MontserratAlternates_500Medium";
`;

