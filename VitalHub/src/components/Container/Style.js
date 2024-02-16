import styled from "styled-components";

//import lib linear gradient
import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`

    flex:1;
    align-items: center;
    background-color: #fafafa;
    
`
export const ContainerLogo = styled.View`
    flex-direction: row;
    width: 90%;
    margin-top: 20px;
   /*  justify-content: space-evenly; */
    
`
export const ContainerCodigo = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
`

export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: {x: -0.05, y: 1.08},
    end: {x: 1, y:0}
})`

    width: 100%;
    height: 144px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`

