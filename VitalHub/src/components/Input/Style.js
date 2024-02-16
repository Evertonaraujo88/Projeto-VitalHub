import styled from "styled-components";

export const Input = styled.TextInput.attrs({placeholderTextColor:'#34898f'})`
    width: 90%;
    height: 53px;

    padding: 16px;
    margin-top: 15px;

    border: 2px solid #49b3ba;
    border-radius: 5px;
    color: #34898f; 
    font-size: 16px;
    font-family: 'MontserratAlternates_600SemiBold'; 
    
`
export const InputReperar = styled(Input)`
 margin-bottom: 30px;
`

export const InputCodigo = styled(Input)`
 width: 65px;
 height: 62px;

 font-family: 'Quicksand_600SemiBold';
 font-size: 40px;
 padding: 5px 20px;
 
`
export const InputPerfil = styled(Input)`
    margin-top: 10px;
    border: 2px solid #F5F3F3;
    width: 100%;
   /*  background-color: #F5F3F3; */

    font-size: 14px;
    font-family: 'MontserratAlternates_500Medium'
`