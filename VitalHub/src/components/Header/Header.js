

import { ContainerHeader } from "../Container/Style";
import { BoxUser, DataUser, ImageUser } from "./Style";

export const Header = () => {
  return (
    <ContainerHeader>

      <BoxUser>
        <ImageUser 
            source={{uri: "https://hithub.com/enzoquarelo.png"}}
        />

        <DataUser>
          <TextDefault>Bem vindo</TextDefault>
          <NomeUser>Dr. Enzo</NomeUser>
        </DataUser>
      </BoxUser>

      <MaterialIcons />
    </ContainerHeader>
  );
};
