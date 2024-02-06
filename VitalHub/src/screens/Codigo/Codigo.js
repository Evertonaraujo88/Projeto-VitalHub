import { Button, View } from "react-native";

export const Codigo = ({navigation}) => {
    return (
            <View style= {{flex:1, alignItems: "center", justifyContent: "center"}}>
                
                <Button
                    title="Entrar"
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
    );
}