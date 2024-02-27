import { ContainerCardsList, ViewRow } from "../AppointmentCard/Style"

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ContainerCardsListClinic, ContainerNote, ConteinerService, TextBairro, TextClinic, TextNote, TextService } from "./Style";
import { StyleSheet } from "react-native";
import { ButtonSalvar } from "../../screens/ProntuarioMedico/Style";
import { ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../Botao/Style";


export const AppointimentClinic = ({
    
    nomeClinica="",
    bairro="",
    avaliacao="",
    atendimento=""
}) => {


    return(
        <ContainerCardsListClinic style={styles.shadow}>

            

            <ViewRow>

                <TextClinic>{nomeClinica}</TextClinic>

                <ContainerNote>
                <AntDesign name="star" size={22} color="#F9A620" />
                <TextNote>{avaliacao}</TextNote>

                </ContainerNote>

            </ViewRow>
            
            <ViewRow>
                <TextBairro>{bairro}</TextBairro>

                <ConteinerService>
                <MaterialCommunityIcons name="calendar" size={14} color="#49B3BA" />
                <TextService>{atendimento}</TextService>

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