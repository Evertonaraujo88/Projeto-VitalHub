import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegacao } from './src/screens/Navegacao/Navegacao.js';
import { Login } from './src/screens/Login/Login.js';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha.js';
import { Codigo } from './src/screens/Codigo/Codigo.js';

//import Fontes
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium  } from '@expo-google-fonts/montserrat-alternates';






//Instacia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts ({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium
  })

    if (!fontsLoaded && ~fontsError) {
      return null;
    }

  return (
    //Navegação

      //Container

      //StackNavegator
      //StackScreen


      //estrutura da navegação
    <NavigationContainer>

      {/* componente para navegação */}
      <Stack.Navigator>
        
        {/* TELA */}
        <Stack.Screen
          //nome da tela
          name='Navegacao Provisória'

          //componente que será chamado
          component={Navegacao}

          //titulo da tela
          options={{title: 'Navegação Provisória'}}       
        />

        <Stack.Screen
          name= "Login"
          component={Login}
          options={{title: "Login"}}
        
        />

        <Stack.Screen
          name= "Recuperar Senha"
          component={RecuperarSenha}
          options={{title: "Recuperar Senha"}}
        
        />

        <Stack.Screen
          name= "Código E-mail"
          component={Codigo}
          options={{title: "Código E-mail"}}
        
        />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}

