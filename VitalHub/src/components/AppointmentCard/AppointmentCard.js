import {AntDesign} from '@expo/vector-icons'
import { ButtonCard, Buttonext, ClockCard, 
    ContainerCardsList, 
    ContentCard, 
    DataProfileCard, 
    ProfileData, 
    ProfileImage, 
    ProfileName, 
    TextAge, 
    TextBold, 
    TextBoldClock, 
    ViewRow } from './Style'
import { StyleSheet } from 'react-native'

export const AppointmentCard = ({

    situacao = "pendente",
    onPressCancel,
    onPressAppointment,

}) =>{
    return(
        /* Container principal do card */
        <ContainerCardsList style={styles.shadow}>

            {/* Componente de imagem de perfil */}
            <ProfileImage
            source={{uri: "https://github.com/ojuaum1.png"}}
            />

            {/* conteudo ao lado da imagem de perfil */}
            <ContentCard>
                
                {/* dados do perfil */}
                <DataProfileCard>

                    <ProfileName>João Oliveira</ProfileName> 

                    <ProfileData>

                        <TextAge>19 anos</TextAge>

                        <TextBold>Rotina</TextBold>

                    </ProfileData>



                </DataProfileCard>

               <ViewRow>

                    <ClockCard situacao={situacao}>

                        <AntDesign 
                        name="clockcircle" 
                        size={14} 
                        color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}/>

                        <TextBold
                        situacao={situacao}
                        color={"49B3BA"}
                        >14:00</TextBold> 

                    </ClockCard>

                    {/* valida e mostr o tipo de botao conforme a situacao */}
                    {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (
                            <ButtonCard onPress={onPressCancel}>
                                <Buttonext situacao={situacao}>Cancelar</Buttonext>
                            </ButtonCard>

                        ) : (
                            <ButtonCard onPress={onPressAppointment}>
                                <Buttonext situacao={situacao}>Ver Prontuário</Buttonext>
                            </ButtonCard>
                        )
                    }
                   

                </ViewRow>

            </ContentCard>

        </ContainerCardsList>
    )
}

const styles = StyleSheet.create({
    shadow: {
        elevation:4,
        shadowColor: '#000000',
    }
})