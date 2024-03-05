import { ButtonCancel, ButtonSecondaryTitle, ButtonTitle } from "../../components/Botao/Style"
import { CalendarSelect, Example } from "../../components/CalendarSelect/CalendarSelect"
import { ContainerCalendar } from "../../components/CalendarSelect/Style"
import { Container } from "../../components/Container/Style"
import { ButtonSalvar } from "../ProntuarioMedico/Style"
import { ContentButtons, TitleSelect } from "../SelecionarClinica/Style"
import { Calendar, LocaleConfig } from "react-native-calendars";
import { BoxCalendar, BoxSelect, ContentBox, DateText } from "./Style"
import { Select } from "../../components/Select/Select"
import { useState } from "react"
import { SchedulingModal } from "../../components/SchedulingModal/SchedulingModal"

LocaleConfig.locales['pt'] = {
  monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
  ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: "Hoje"
};

LocaleConfig.defaultLocale = 'pt';


export const SelecionarData = () => {
  const [selected, setSelected] = useState('');
  const [showModalScheduling, setShowModalScheduling] = useState(false);

    return(
        <Container>

            <SchedulingModal
                visible={showModalScheduling}
                setShowModalScheduling={setShowModalScheduling}
            />

            

            <ContentBox>
                
                <TitleSelect>Selecionar Data</TitleSelect>

                <BoxCalendar>
                    <Calendar

                    hideArrows={true}

                    style={{
                        height: 249,
                        fontFamily: 'MontserratAlternates_600SemiBold',
                        
                    }}

                    headerStyle={{
                        fontFamily: 'MontserratAlternates_600SemiBold',
                    }}

                    theme={{
                        backgroundColor: '#FAFAFA',
                        calendarBackground: '#FAFAFA',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#49B3BA',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDayFontFamily: 'Quicksand_600SemiBold', 
                        textDayHeaderFontFamily: 'Quicksand_600SemiBold',
                        textMonthFontFamily: 'MontserratAlternates_600SemiBold',
                        textMonthFontSize: 20,
                        textDayHeaderFontSize: 12,


            
                    }}

                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                    }}
                    />

                </BoxCalendar>

                <BoxSelect>
                    <DateText>Selecione um horário disponível</DateText>
                    <Select/>
                </BoxSelect>


                
            </ContentBox>


        
  
        <ContentButtons>
          <ButtonSalvar onPress={() => { setShowModalScheduling(true) }}>
            <ButtonTitle>CONFIRMAR</ButtonTitle>
          </ButtonSalvar>
  
          <ButtonCancel /* onPress={() => setShowModalQuery(false)} */>
            <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
          </ButtonCancel>
        </ContentButtons>
      </Container>
    )
}