import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenInputs ,ScreenMapa} from '../screens';
import { cores } from '../styles/cores'

type MenuDrawerParam = {
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
        <Drawer.Navigator
        screenOptions={{
            drawerActiveTintColor: cores.primary
        }}
        >
            <Drawer.Screen name="Inputs" component={ScreenInputs} />
            <Drawer.Screen name="Mapa" component={ScreenMapa} />
        </Drawer.Navigator>
    );
}