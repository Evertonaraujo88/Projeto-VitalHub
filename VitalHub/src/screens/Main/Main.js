// implatação do botton Tabs

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//imports telas
import { Home } from '../Home/Home'
import { PerfilPaciente } from '../PerfilPaciente/PerfilPaciente'

import {FontAwesome, FontAwesome5} from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator()

export const Main = () =>{
    return(
        <BottomTab.Navigator
         
            screenOptions ={ ({ route}) => ({
                tabBarStyle: {backGroudColor: "#FFFFFF", height: 80, paddingTop: 10},
                tabBarActiveBackGroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {

                    if (route.name === "Home") {
                        
                        return(
                            <></>
                        )

                    } else{

                    }

                }
            }) }
        
        >

           
            

            {/* criar a rota da home */}
            <BottomTab.Screen
                name = "Home"
                component = {Home}
            
            />


            {/* Criar a rota do perfil */}
            <BottomTab.Screen
                name = "Perfil"
                component= {PerfilPaciente}
            />
        </BottomTab.Navigator>
    )
}