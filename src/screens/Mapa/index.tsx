import { useEffect, useRef, useState } from "react";
import MapView, { LatLng, Marker, Polyline, Region } from 'react-native-maps'
import * as Location from 'expo-location'
import { View, Text, Alert } from "react-native";
import { styles } from "./style";
import { colors } from '../../styles/GlobalStyles';
import { useRoute } from "@react-navigation/native"
import { ICoords, MenuTabTypes } from "../../navigation/MenuBottomTabs";
import { MaterialIcons } from "@expo/vector-icons";

export function Mapa({ navigation }: MenuTabTypes) {
    const [region, setRegion] = useState<Region>();
    const [errorMsg, setErrorMsg] = useState<null | string>(null);
    const mapRef = useRef<MapView>(null)

    // Variáveis de Estado que são necessárias para pegar os dados
    const route = useRoute()
    const data = route.params as ICoords

    // Variáveis de estado para setar origem e destino
    const [origem, setOrigem]  = useState<Region>();
    const [destino, setDestino]  = useState<Region>();
    useEffect(() => {

        const handleLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to acces location was denied");
                return;
            }
            if (data && data.oLat && data.oLong && data.dLat && data.dLong) {
                setOrigem({
                    latitude: Number(data.oLat), longitude: Number(data.oLong), latitudeDelta:0.04, longitudeDelta: 0.04
                })
                setDestino({
                    latitude: Number(data.dLat), longitude: Number(data.dLong), latitudeDelta:0.04, longitudeDelta: 0.04,
                })
            } else {
                navigation.navigate('Inputs')
                Alert.alert('Informações incompletas, lembre-se de preencher todos os campos!')
            }

        };

        handleLocation();
    }, [data]);


    let text = "Waiting..";
    if (errorMsg) {
        text = errorMsg;
    }

    return (
        <View style={styles.container}>

            <MapView style={styles.map} region={origem}
                showsUserLocation={true} ref={mapRef}
            >

                <Marker coordinate={origem as LatLng}>
                    <MaterialIcons name="room" size={34} color={colors.primary} />               
                </Marker>
                <Marker coordinate={destino as LatLng}>
                    <MaterialIcons name="room" size={34} color={colors.primary} />  
                </Marker>

                <Polyline strokeColor={colors.primary} strokeWidth={6} coordinates={[origem as LatLng, destino as LatLng]}></Polyline>

            </MapView>


        </View>
    )
}