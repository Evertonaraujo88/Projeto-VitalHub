import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Instacia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //Navegação

      //Container

      //StackNavegator
      //StackScreen


      //estrutura da navegação
    <NavigationContainer>

      {{/* componente para navegação */}}
      <Stack.Navigator>
        
        <Stack.Screen
          //nome da tela
          name='Navegacao'

          //componente que será chamado
          component={Navegacao}

          //titulo da tela
          options={{title: 'Navegação'}}

        
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

