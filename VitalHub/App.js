import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegacao } from './src/screens/Navegacao/Navegacao.js';
import { Login } from './src/screens/Login/Login.js';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha.js';
import { Codigo } from './src/screens/Codigo/Codigo.js';

//import Fontes
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold  } from '@expo-google-fonts/montserrat-alternates';
import {Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular} from '@expo-google-fonts/quicksand';
import { NovaSenha } from './src/screens/NovaSenha/NovaSenha.js';
import { Cadastro } from './src/screens/Cadastro/Cadastro.js';
import { PerfilPaciente } from './src/screens/PerfilPaciente/PerfilPaciente.js';
import { Home } from './src/screens/Home/Home.js';
import { ProntuarioMedico } from './src/screens/ProntuarioMedico/ProntuarioMedico.js';
import { HomePaciente } from './src/screens/HomePaciente/HomePaciente.js';





//Instacia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts ({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_400Regular
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
          name= "RecuperarSenha"
          component={RecuperarSenha}
          options={{title: "Recuperar Senha"}}
        
        />

        <Stack.Screen
          name= "Codigo"
          component={Codigo}
          options={{title: "Código E-mail"}}
        
        />

        <Stack.Screen
          name= "NovaSenha"
          component= {NovaSenha}
          options={{title: "Nova Senha"}}
        
        />

        <Stack.Screen
          name= "Cadastro"
          component= {Cadastro}
          options={{title: "Cadastro"}}
        
        />

        <Stack.Screen
          name= "PerfilPaciente"
          component= {PerfilPaciente}
          options={{title: "Perfil do Paciente"}}
        
        />

        <Stack.Screen
          name= "Home"
          component= {Home}
          options={{title: "Home"}}
        
        />
        <Stack.Screen
          name= "ProntuarioMedico"
          component= {ProntuarioMedico}
          options={{title: "Prontuário Médico"}}
        
        />

<Stack.Screen
          name= "HomePaciente"
          component= {HomePaciente}
          options={{title: "Prontuário Médico"}}
        
        />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}

