/* import { View } from "react-native"
import { LinkCancel } from "../../components/Links/style"
import { ButtonBox } from "../../components/button/style"
import { Container, DoubleContentBox, SmallBox } from "../../components/container/style"
import { InputGrey } from "../../components/input/styled"
import { LabelLocal, SubtextCard, SubtextLocal, TitleProfile, TitleTextInfo } from "../../components/title/style"
import { AddressBox, AlignButton, ContainerBackground, ContentAL, MapImage } from "./Style" */

import { TitleSelect } from "../../screens/SelecionarClinica/Style";
import { Container } from "../Container/Style";
import { TitleTextInfo } from "../SchedulingModal/Style";
import {
  AddressBox,
  AlignButton,
  ButtonBox,
  ContainerBackground,
  ContentAL,
  DoubleContentBox,
  InputGrey,
  LinkCancel,
  MapImage,
  SmallBox,
  SubtextLocal,
  ViewMap,
} from "./Style";

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useEffect, useState, useRef } from "react";

// import da dependencia do mapa
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import {
  //solicita o acesso a localização atual do ususario
  requestForegroundPermissionsAsync,

  //recebe a localizacao atual do usuario
  getCurrentPositionAsync,

  //monitorar o posicionamento
  watchPositionAsync,

  //Pega o valor da localizacao
  LocationAccuracy,
} from "expo-location";

// import de distancia entre dois pontos
import MapViewDirections from "react-native-maps-directions";

//import APIKEY
import { mapskey } from "../../../util/mapsApiKey";

export const AppointmentLocation = ({ Navigation }) => {
  const [initialPosition, setInitialPosition] = useState(null);

  async function CapturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const captureLocation = await getCurrentPositionAsync();

      setInitialPosition(captureLocation);

      console.log(initialPosition);
    }
  }

  useEffect(() => {
    CapturarLocalizacao();
  }, [1000]);

  return (
    <Container>
      {/*  <MapImage
                source={require('../../assets/images/mapImage.jpg')}
            /> */}

      <ViewMap>
        <MapView
          /*  ref={mapReference} */
          //marcar o ponto de inicio

          initialRegion={{
            latitude: -23.68037,
            longitude: -46.49932,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        
          customMapStyle={grayMapStyle}
        >
          <Marker 
            coordinate={{
                latitude: -23.68037,
                longitude: -46.49932,
              }}

              title="Posição Inicial"
              description="Estou aqui"
              pinColor={"Red"}
          />

          <MapViewDirections 
             /* origin={} */
             destination={{
               latitude: -23.68037,
               longitude: -46.49932,
               latitudeDelta: 0.005,
               longitudeDelta: 0.005,
             }}
             strokeWidth={5}
             strokeColor="#496BBa"
             apikey={mapskey}
          />

          <Marker />
        </MapView>
      </ViewMap>

      <ContainerBackground>
        <ContentAL>
          <TitleSelect>Clínica Natureh</TitleSelect>
          <SubtextLocal>São Paulo, SP</SubtextLocal>

          <AddressBox>
            <TitleTextInfo>Endereço</TitleTextInfo>
            <InputGrey placeholder="Rua Vicenso Silva, 987" />
          </AddressBox>

          {/* Criar os componentes DoubleContentBox e SmallBox na pasta Container. Porque vamos usar eles dnv */}
          <DoubleContentBox>
            <SmallBox>
              <TitleTextInfo>Numero</TitleTextInfo>
              <InputGrey placeholder="578" />
            </SmallBox>

            <SmallBox>
              <TitleTextInfo>Bairro</TitleTextInfo>
              <InputGrey placeholder="Moema-SP" />
            </SmallBox>
          </DoubleContentBox>

          <AlignButton>
            <ButtonBox onPress={() => Navigation.replace("Main")}>
              <LinkCancel>Voltar</LinkCancel>
            </ButtonBox>
          </AlignButton>
        </ContentAL>
      </ContainerBackground>
    </Container>
  );
};

const grayMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#E1E0E7",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#33303E",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#66DA9F",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1B1B1B",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C6C5CE",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ACABB7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#8EA5D9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
];
