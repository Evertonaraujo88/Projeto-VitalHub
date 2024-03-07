/* import { View } from "react-native"
import { LinkCancel } from "../../components/Links/style"
import { ButtonBox } from "../../components/button/style"
import { Container, DoubleContentBox, SmallBox } from "../../components/container/style"
import { InputGrey } from "../../components/input/styled"
import { LabelLocal, SubtextCard, SubtextLocal, TitleProfile, TitleTextInfo } from "../../components/title/style"
import { AddressBox, AlignButton, ContainerBackground, ContentAL, MapImage } from "./Style" */

import { TitleSelect } from '../../screens/SelecionarClinica/Style'
import { Container } from '../Container/Style'
import { TitleTextInfo } from '../SchedulingModal/Style'
import { AddressBox, AlignButton, ButtonBox, ContainerBackground, ContentAL, DoubleContentBox, InputGrey, LinkCancel, MapImage, SmallBox, SubtextLocal } from './Style'



export const AppointmentLocation = ({Navigation}) => {
    return(
        <Container>

            <MapImage
                source={require('../../assets/images/mapImage.jpg')}
            />

            <ContainerBackground>
                <ContentAL>

                    <TitleSelect>Clínica Natureh</TitleSelect>
                    <SubtextLocal>São Paulo, SP</SubtextLocal>

                    <AddressBox>
                        <TitleTextInfo>Endereço</TitleTextInfo>
                        <InputGrey
                            placeholder="Rua Vicenso Silva, 987"
                        />
                    </AddressBox>


                    {/* Criar os componentes DoubleContentBox e SmallBox na pasta Container. Porque vamos usar eles dnv */}
                    <DoubleContentBox>
                        <SmallBox>
                            <TitleTextInfo>Numero</TitleTextInfo>
                            <InputGrey
                                placeholder="578"
                            />
                        </SmallBox>

                        <SmallBox>
                            <TitleTextInfo>Bairro</TitleTextInfo>
                            <InputGrey
                                placeholder="Moema-SP"
                            />
                        </SmallBox>
                    </DoubleContentBox>

                    <AlignButton>
                        <ButtonBox onPress={ () => Navigation.replace("Main")}>
                            <LinkCancel>Voltar</LinkCancel>
                        </ButtonBox>
                    </AlignButton>

                </ContentAL>
            </ContainerBackground>

        </Container>
    )
}