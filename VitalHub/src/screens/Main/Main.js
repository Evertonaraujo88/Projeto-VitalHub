// implatação do botton Tabs

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//imports telas

import { PerfilPaciente } from "../PerfilPaciente/PerfilPaciente";
import { HomePaciente } from "../HomePaciente/HomePaciente";

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import { ContentIcon, TextIcon } from "./Style";

const BottomTab = createBottomTabNavigator();

export const Main = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backGroudColor: "#FFFFFF", height: 80, paddingTop: 10 },
        tabBarActiveBackGroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          if (route.name === "HomePaciente") {
            return (
              <ContentIcon
                tabBarActiveBackGroundColor={
                  focused ? "#ecf2ff" : "transparent"
                }
              >
                <FontAwesome name="calendar" size={18} color="#4e4b59" />

                {focused && <TextIcon>Agenda</TextIcon>}
              </ContentIcon>
            );
          } else { route.name === "Perfil";

            return (
              <ContentIcon
                tabBarActiveBackGroundColor={
                  focused ? "#ecf2ff" : "transparent"
                }
              >
                <FontAwesome5 name="user-circle" size={22} color="#4e4b59" />

                {focused && <TextIcon>Perfil</TextIcon>}
              </ContentIcon>
            );
          }
        },
      })}
    >
      {/* criar a rota da home */}
      <BottomTab.Screen name="HomePaciente" component={HomePaciente} />

      {/* Criar a rota do perfil */}
      <BottomTab.Screen name="Perfil" component={PerfilPaciente} />
    </BottomTab.Navigator>
  );
};
