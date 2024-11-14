import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ScreenMapa, ScreenInputs} from "../screens/index";
import { Entypo, Feather } from "@expo/vector-icons";
import React from 'react';
import { colors } from "../styles/GlobalStyles";

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
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: 'white',
            tabBarStyle: { backgroundColor: colors.primary },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white',
            tabBarActiveBackgroundColor: colors.secondary
        }}>
            <Tab.Screen name="Inputs" component={ScreenInputs}
                options={{
                    title:"Entrada de Dados",
                    tabBarIcon: () => (
                        <Feather name="search" size={27} color="white" />
                    )
                }}
            />

            <Tab.Screen name="Mapa" component={ScreenMapa}
                options={{
                    title:"Posiciona Mapa",
                    tabBarIcon: () => (
                        <Entypo name="map" size={27} color="white" />
                    )
                }}
            />
            </Tab.Navigator>
    )
}