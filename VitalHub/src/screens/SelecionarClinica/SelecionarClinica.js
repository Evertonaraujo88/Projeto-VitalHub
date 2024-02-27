import { useState } from "react";
import { Container } from "../../components/Container/Style";
import { ListComponent } from "../../components/List/List";
import { Title } from "../../components/Title/Style";
import { ContentButtons, TitleSelect } from "./Style";
import { AppointimentClinic } from "../../components/AppointmentClinic/AppointimentClinic";
import { ButtonSalvar } from "../ProntuarioMedico/Style";
import {
  ButtonCancel,
  ButtonSecondaryTitle,
  ButtonTitle,
} from "../../components/Botao/Style";

const Clinicas = [
  {
    id: 1,
    nomeClinica: "Clinica Natureh",
    bairro: "São Paulo, SP",
    avaliacao: "4,5",
    atendimento: "Seg-Sex",
  },
  {
    id: 2,
    nomeClinica: "Diamond Pró-Mulher",
    bairro: "São Paulo, SP",
    avaliacao: "4,8",
    atendimento: "Seg-Sex",
  },
  {
    id: 3,
    nomeClinica: "Clinica Villa Lobos",
    bairro: "Taboão, SP",
    avaliacao: "4,2",
    atendimento: "Seg-Sex",
  },
  {
    id: 4,
    nomeClinica: "SP Oncologia Clínica",
    bairro: "Taboão, SP",
    avaliacao: "4,2",
    atendimento: "Seg-Sex",
  },
  {
    id: 5,
    nomeClinica: "Health Clinic",
    bairro: "São Caetano do Sul, SP",
    avaliacao: "4,9",
    atendimento: "Seg-Sex",
  },
];
export const SelecionarClinica = ({ navigation }) => {
  const [statusBairro, setStatusBairro] = useState("São Paulo, SP");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardPress = (id) => {
    setSelectedCard(id);
  };

  return (
    <Container>
      <TitleSelect>Selecionar clínica</TitleSelect>

      <ListComponent
        data={Clinicas}
        keyExtractor={(item) => item.id}
        /* o renderItem funciona como um map */
        renderItem={({ item }) =>
          /* statusBairro == item.bairro && */ (
            <AppointimentClinic
         /*      style={{
                borderColor: selectedCard === item.id ? "#496BBA" : "transparent", // Adiciona a cor da borda condicionalmente
                borderWidth: selectedCard === item.id ? 2 : 0, // Adiciona a largura da borda condicionalmente
              }}
              onPress={() => handleCardPress(item.id)} // Chama a função handleCardPress ao ser pressionado */
              nomeClinica={item.nomeClinica}
              bairro={item.bairro}
              avaliacao={item.avaliacao}
              atendimento={item.atendimento}
            />
          )
        }
      />

      <ContentButtons>
        <ButtonSalvar /* onPress={() => { setSelecionarClinica(true) }} */>
          <ButtonTitle>CONTINUAR</ButtonTitle>
        </ButtonSalvar>

        <ButtonCancel /* onPress={() => setShowModalQuery(false)} */>
          <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
        </ButtonCancel>
      </ContentButtons>
    </Container>
  );
};
