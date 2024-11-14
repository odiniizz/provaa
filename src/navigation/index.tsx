import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { MenuBottomTabs } from './MenuBottomTabs';
import { DrawerNavigation } from './MenuDrawer.navigation';

export default function Navigation () {
    return (
        <NavigationContainer>
            <DrawerNavigation/>
        </NavigationContainer>
    )
}