import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ScreenMapa, ScreenInputs} from "../screens/index";
import { Entypo, Feather } from "@expo/vector-icons";
import React from 'react';
import { cores } from "../styles/cores";

export interface ICoords {
    oLat?: string
    oLong?: string
    dLat?: string
    dLong?: string
}

type TabParam = {
    Inputs: undefined
    Mapa: undefined | ICoords
}

type MenuScreenNavigation = BottomTabNavigationProp<TabParam, "Inputs">

export type MenuTabTypes = {
    navigation: MenuScreenNavigation;
}

export function MenuBottomTabs() {
    const Tab = createBottomTabNavigator<TabParam>();
    return (
        <Tab.Navigator screenOptions={{
            headerStyle: { backgroundColor: cores.primary },
            headerTintColor: 'white',
            tabBarStyle: { backgroundColor: cores.primary },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white',
            tabBarActiveBackgroundColor: cores.black
        }}>
            <Tab.Screen name="Inputs" component={ScreenInputs}
                options={{
                    title:"Entrada das Coordenadas",
                    tabBarIcon: () => (
                        <Entypo name="laptop" size={27} color="white" />
                    )
                }}
            />

            <Tab.Screen name="Mapa" component={ScreenMapa}
                options={{
                    title:"Montagem do Mapa",
                    tabBarIcon: () => (
                        <Feather name="map" size={27} color="white" />
                    )
                }}
            />
            </Tab.Navigator>
    )
}