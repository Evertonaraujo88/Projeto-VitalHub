import { StyleSheet } from "react-native";
import { TextBairro, TextClinic } from "../AppointmentClinic/Style";
import { ContainerCardsListDoctor, ImageDoctor, TextEspecialidade, ViewColumn } from "./Style";

export const AppointmentDoctor = ({
  nomeMedico = "",
  seguimento = "",
  especialidade = "",
}) => {
  return (
    <ContainerCardsListDoctor style={styles.shadow}>

      <ImageDoctor source={{ uri: "https:/github.com/evertonaraujo88.png" }} />

      <ViewColumn>
      <TextClinic>{nomeMedico}</TextClinic>
      <TextEspecialidade>{seguimento}, {especialidade}</TextEspecialidade>
      </ViewColumn>


    </ContainerCardsListDoctor>
  );
};
const styles = StyleSheet.create({
  shadow: {
    elevation: 4,
    shadowColor: "#000000",
  },
});
