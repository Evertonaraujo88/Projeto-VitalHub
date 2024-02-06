import { Button, View } from "react-native";

export const RecuperarSenha = ({navigation}) => {
    return (
            <View style= {{flex:1, alignItems: "center", justifyContent: "center"}}>
                
                <Button
                    title="Continuar"
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
    );
}