import { ContainerCardsList, ViewRow } from "../AppointmentCard/Style"

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ContainerCardsListClinic, ContainerNote, ConteinerService, TextBairro, TextClinic, TextNote, TextService } from "./Style";
import { StyleSheet } from "react-native";
import { ButtonSalvar } from "../../screens/ProntuarioMedico/Style";
import { ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../Botao/Style";


export const AppointimentClinic = () => {
    bairro = "São Paulo"
    return(
        <ContainerCardsListClinic style={styles.shadow}>

            

            <ViewRow>

                <TextClinic>Diamond Pró-Mulher</TextClinic>

                <ContainerNote>
                <AntDesign name="star" size={22} color="#F9A620" />
                <TextNote>4,8</TextNote>

                </ContainerNote>

            </ViewRow>
            
            <ViewRow>
                <TextBairro>São Paulo, SP</TextBairro>

                <ConteinerService>
                <MaterialCommunityIcons name="calendar" size={14} color="#49B3BA" />
                <TextService>Seg-Sex</TextService>

                </ConteinerService>


            </ViewRow>

          

        </ContainerCardsListClinic>
        
    )
}

const styles =  StyleSheet.create({
    shadow: {
        elevation:4,
        shadowColor: '#000000',
    }
})