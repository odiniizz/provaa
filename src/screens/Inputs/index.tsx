import { useEffect, useRef, useState } from "react";
import MapView, { Marker, Polyline, Region } from 'react-native-maps'
import * as Location from 'expo-location'
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./style";
import { colors } from '../../styles/GlobalStyles';
import { MenuTabTypes } from "../../navigation/MenuBottomTabs";
import { ICoords } from "../../navigation/MenuBottomTabs";

export function Inputs({ navigation }: MenuTabTypes) {
    const [data, setData] = useState<ICoords>()

    function handleChange(item: ICoords) {
        setData({ ...data, ...item });
        console.log(data)
    }

    function handleShowMap() {
        if (!data?.dLat || !data.dLong || !data.oLat || !data.oLong) {
        Alert.alert("Informações incompletas, lembre-se de preencher todos os campos!")
        } else {
        navigation.navigate("Mapa", data)
        }
       }

    return (
        <View style={styles.container}>
            <View style={styles.viewDados}>
                <Text style={styles.titulo}>Origem</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={"black"}
                    placeholder="Latitude"
                    keyboardType="numeric"
                    onChangeText={(i) => handleChange({ oLat:i })}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={"black"}
                    placeholder="Longitude"
                    keyboardType="numeric"
                    onChangeText={(i) => handleChange({ oLong:i })}
                />
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.titulo}>Destino</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={"black"}
                    placeholder="Latitude"
                    keyboardType="numeric"
                    onChangeText={(i) => handleChange({ dLat:i })}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={"black"}
                    placeholder="Longitude"
                    keyboardType="numeric"
                    onChangeText={(i) => handleChange({ dLong:i })}
                />
            </View>
            <TouchableOpacity onPress={handleShowMap} style={styles.botao}>
                <Text style={styles.botaoTexto}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}