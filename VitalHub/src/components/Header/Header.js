

import { ContainerHeader } from "../Container/Style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const Header = () => {
  return (
    <ContainerHeader>

      <BoxUser>
        <ImageUser 
            source={{uri: "https:/github.com/evertonaraujo88.png"}}
        />

        <DataUser>
          <TextDefault>Bem vindo!</TextDefault>
          <NameUser>Dr. Everton</NameUser>
        </DataUser>
      </BoxUser>

      <MaterialIcons name="notifications" size={25} color= '#FBFBFB'/>

    </ContainerHeader>
  );
}
