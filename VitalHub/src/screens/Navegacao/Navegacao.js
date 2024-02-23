import { Button, View } from "react-native";

export const Navegacao = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />

      <Button
        title="Recuperar Senha"
        onPress={() => navigation.navigate("RecuperarSenha")}
      />

      <Button title="Código" onPress={() => navigation.navigate("Codigo")} />

      <Button
        title="NovaSenha"
        onPress={() => navigation.navigate("NovaSenha")}
      />

      <Button
        title="Cadastro"
        onPress={() => navigation.navigate("Cadastro")}
      />

      <Button
        title="PerfilPaciente"
        onPress={() => navigation.navigate("PerfilPaciente")}
      />

      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
      />
      
      <Button
        title="ProntuarioMedico"
        onPress={() => navigation.navigate("ProntuarioMedico")}
      />

      <Button
        title="HomePaciente"
        onPress={() => navigation.navigate("HomePaciente")}
      />

    </View>
  );
};
