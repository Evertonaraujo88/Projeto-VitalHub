import { useState } from "react";
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointment";
import CalendarList from "../../components/CalendarHome/CalendarHome";
import { Container } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";
import { ContentSteto, FilterAppointment, ViewFooter } from "./Style";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import { ListComponent } from "../../components/List/List";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { CancelationModal } from "../../components/CancelationModal/CancelationModal";
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal";
import { FontAwesome6 } from '@expo/vector-icons';
import { QueryModal } from "../../components/QueryModal/QueryModal";
import { DoctorModal } from "../../components/DoctorModal/DoctorModal";

const Consultas = [
  { id: 1, nome: "Everton", situacao: "pendente" },
  { id: 2, nome: "Everton", situacao: "realizado" },
  { id: 3, nome: "Everton", situacao: "cancelado" },
  { id: 4, nome: "Everton", situacao: "cancelado" },
  { id: 5, nome: "Everton", situacao: "pendente" },
  { id: 6, nome: "Everton", situacao: "pendente" },
  { id: 7, nome: "Everton", situacao: "pendente" },
  
];

export const HomePaciente = ({ navigation }) => {
  const [statusLista, setStatusLista] = useState("pendente");
  
  //state para os modais
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setshowModalAppointment] = useState(false);
  const [showModalQuery, setShowModalQuery] = useState(false);
  const [showModalDoctor, setShowModalDoctor] = useState(true);

  return (
    <Container>
      <StatusBar />

      <Header />

      <CalendarList />

      {/* Container dos botes */}
      <FilterAppointment>
        {/* botao agendado */}
        <AbsListAppointment
          textButton={"Agendadas"}
          clickButton={statusLista === "pendente"}
          onPress={() => setStatusLista("pendente")}
        />

        {/* botao realizado */}
        <AbsListAppointment
          textButton={"Realizadas"}
          clickButton={statusLista === "realizado"}
          onPress={() => setStatusLista("realizado")}
        />

        {/* botao cancelado */}
        <AbsListAppointment
          textButton={"Canceladas"}
          clickButton={statusLista === "cancelado"}
          onPress={() => setStatusLista("cancelado")}
        />
      </FilterAppointment>

      {/* Cards */}
      {/* Lista (FlatList) */}
        <ListComponent
            data = {Consultas}
            keyExtractor= {(item) => item.id}

            /* o renderItem funciona como um map */
            renderItem={({item}) => 
             statusLista == item.situacao && (

                 <AppointmentCard
                    situacao={item.situacao}
                    onPressAppointment={()=>setshowModalAppointment(true)}   
                    onPressCancel={()=>setShowModalCancel(true)}   
                />
             )
            }
               
        />
        
        <CancelationModal
          visible={showModalCancel}
          setShowModalCancel={setShowModalCancel}
        />
          
        <AppointmentModal
          visible={showModalAppointment}
          setshowModalAppointment={setshowModalAppointment}

        />

        <DoctorModal
          visible={showModalDoctor}
          setShowModalDoctor={setShowModalDoctor}
        />

        
      
      <ViewFooter>
          
         <ContentSteto style={styles.shadow} onPress={()=> setShowModalQuery(true)}>
            
            <FontAwesome6 
              name="stethoscope" 
              size={32} 
              color="white" 
            />

        </ContentSteto>

        <QueryModal
              visible= {showModalQuery}
              setShowModalQuery={setShowModalQuery}    
        />

      </ViewFooter>
    </Container>
  )
}

const styles = StyleSheet.create({
    shadow: {
        elevation:4,
        shadowColor: '#000000',
    }
})
