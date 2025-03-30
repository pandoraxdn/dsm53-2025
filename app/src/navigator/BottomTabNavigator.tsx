import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screen1 } from '../screens/tabs/Screen1';
import { Screen2 } from '../screens/tabs/Screen2';
import { Screen3 } from '../screens/tabs/Screen3';
import { FontAwesome } from '@expo/vector-icons';

export type RootStackParams = {
    Screen1: undefined;
    Screen2: undefined;
    Screen3: undefined;
}

export const BottomTabNavigator = () => {

    const BottomTab = createBottomTabNavigator<RootStackParams>();

    return(
        <BottomTab.Navigator
            initialRouteName='Screen1'
            screenOptions={ ({ route }) => ({
                tabBarShowIcon: true,
                tabBarPressColor: "violet",
                tabBarPressOpacity: 1,
                tabBarActiveTintColor: "pink",
                tabBarInactiveTintColor: "gray",
                tabBarShowLabel: true, // Mostrar label
                tabBarLabelStyle: { 
                    fontSize: 8, 
                    fontWeight: 'bold' 
                },
                tabBarItemStyle: {
                    borderTopWidth: 3,
                    borderTopColor: "violet",
                },
                tabBarStyle: { backgroundColor: "white" },
                tabBarIndicatorStyle: { 
                    backgroundColor: "violet",
                    height: 4, 
                    borderRadius: 10,
                },
                tabBarIcon: () => {
                    let iconName: string = "";
                    switch( route.name ){
                        case 'Screen1':
                            iconName = 'group';
                            break;
                        case 'Screen2':
                            iconName = 'cloud';
                            break;
                        case 'Screen3':
                            iconName = 'apple';
                            break;
                    }
                    return <FontAwesome name={`${iconName}`} size={22} />
                }
            })}
        >
            <BottomTab.Screen
                name='Screen1'
                component={Screen1}
                options={{ title: "Página 1" }}
            />
            <BottomTab.Screen
                name='Screen2'
                component={Screen2}
                options={{ title: "Página 2" }}
            />
            <BottomTab.Screen
                name='Screen3'
                component={Screen3}
                options={{ title: "Página 3" }}
            />
        </BottomTab.Navigator>
    );
}

