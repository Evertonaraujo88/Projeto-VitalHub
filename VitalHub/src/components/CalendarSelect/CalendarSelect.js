import { StyleSheet } from 'react-native';

// import lib moment
import moment from "moment";

// import component StyledCalendarStrip
import { StyledCalendarStrip } from './Style';

//import fonts
import { useFonts, MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates';

//component CalendarList
const CalendarSelect = () => {

  //hook useFonts
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold
  }); 

  //fontsLoaded
  if (!fontsLoaded && !fontsError) {
    return null;
  }

  //define padrão pt-br para calendário
  moment.updateLocale("pt-br", {

    //meses
    months:
      "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
        "_"
      ),

    //abreviação de meses
    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),

    //dias da semana
    weekdays:
      "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
        "_"
      ),

    //abreviação dias da semana
    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),

    //abreviação dias da semana 
    weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
  });
  
  //instância da data atual
  const currentDate = new Date();

  //define a data inicial como sendo o primeiro dia do mês
  const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

  //define a data final como sendo o último dia do mês
  const endingDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  //retorna o componente StyleCalendarStrip
  return (

    <></>


  );
};

const styles = StyleSheet.create({
  iconsStyle : {
    display : 'none'
  },
  calendarHeaderStyle : {
    fontSize: 22,
    textAlign: "center",
    alignSelf : 'flex-start',
    color : '#4E4B59',
    fontFamily: "MontserratAlternates_600SemiBold",
    paddingHorizontal: 16
  },
  nameDateStyle : {
    color: "#ACABB7",
    fontSize: 12,
    textTransform : 'capitalize'
  },
  numberDateStyle : {
    color: "#5F5C6B",
    fontSize: 16
  },
  selectedDateNameStyle : {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textTransform : 'capitalize'
  },
  selectedDateNumberStyle : {
    color: "white",
    fontSize: 14
  },
  selectedContainerStyle : {
    backgroundColor: `#60BFC5`
  },
  selectedAnimationStyle : {
    type: "border",
    duration: 200,
    borderWidth: 2,
    borderHighlightColor: "#49B3BA"
  }
})
