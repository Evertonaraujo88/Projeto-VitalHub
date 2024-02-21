import { useState } from "react";
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointment";
import CalendarList from "../../components/CalendarHome/CalendarHome";
import { Container } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";
import { FilterAppointment } from "./Style";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { ListComponent } from "../../components/List/List";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";

const Consultas = [
  { id: 1, nome: "Everton", situacao: "pendente" },
  { id: 2, nome: "Everton", situacao: "realizado" },
  { id: 3, nome: "Everton", situacao: "cancelado" },
  { id: 4, nome: "Everton", situacao: "realizado" },
  { id: 5, nome: "Everton", situacao: "cancelado" },
];

export const Home = ({ navigation }) => {
  const [statusLista, setStatusLista] = useState("pendente");

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
                />
             )
            }
       
        
        />
        
          
        
       
      
    </Container>
  );
};
