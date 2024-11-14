import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenInputs ,ScreenMapa} from '../screens';
import { MenuBottomTabs } from './MenuBottomTabs';

type MenuDrawerParam = {
    TelaInicial: undefined
    Inputs: undefined
    Mapa: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Inputs">
export type DrawerTypes = {
    navigation: MenuScreenNavigation
}

export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="TelaInicial" component={MenuBottomTabs} />
            <Drawer.Screen name="Inputs" component={ScreenInputs} />
            <Drawer.Screen name="Mapa" component={ScreenMapa} />
        </Drawer.Navigator>
    );
}