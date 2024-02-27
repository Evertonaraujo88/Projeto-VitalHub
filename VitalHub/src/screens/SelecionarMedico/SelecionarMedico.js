import { AppointmentDoctor } from "../../components/AppointmentDoctor/AppointmentDoctor";
import {
  ButtonCancel,
  ButtonSecondaryTitle,
  ButtonTitle,
} from "../../components/Botao/Style";
import { Container } from "../../components/Container/Style";
import { ListComponent } from "../../components/List/List";
import { ButtonSalvar } from "../ProntuarioMedico/Style";
import { ContentButtons, TitleSelect } from "../SelecionarClinica/Style";

const Medicos = [
  {
    id: 1,
    nomeMedico: "Dra Alessandra",
    seguimento: "Esteticista",
    especialidade: "Dermatologa",
  },
  {
    id: 2,
    nomeMedico: "Dr Kumushiro",
    seguimento: "Cirurgião",
    especialidade: "Cardiologista",
  },
  {
    id: 3,
    nomeMedico: "Dr Rodrigo Santos",
    seguimento: "Clinico",
    especialidade: "Pediatra",
  },
  {
    id: 4,
    nomeMedico: "Dr Lucas",
    seguimento: "Clinico",
    especialidade: "Pediatra",
  },
  {
    id: 5,
    nomeMedico: "Dr Luis",
    seguimento: "Clinico",
    especialidade: "Pediatra",
  },
  {
    id: 6,
    nomeMedico: "Dr Henrique",
    seguimento: "Clinico",
    especialidade: "Pediatra",
  },
  
];

export const SelecionarMedico = () => {
  return (
    <Container>
      <TitleSelect>Selecionar Médico</TitleSelect>

      <ListComponent
        data={Medicos}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
          <AppointmentDoctor

            nomeMedico={item.nomeMedico}
            seguimento={item.seguimento}
            especialidade={item.especialidade}
          />
        )}
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
