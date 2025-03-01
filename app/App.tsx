import React, { ReactNode } from 'react';
//import { View, Text } from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';
//import MiPrimerComponente, { Props } from './src/screens/MiPrimerComponente';
//import { ComponenteEstilo } from './src/screens/ComponenteEstilo';
//import { ContadorSimple } from './src/screens/ContadorSimple';
//import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { PositionScreen } from './src/screens/PositionScreen';
//import { FlexScreen } from './src/screens/FlexScreen';
//import { UseReducerScreen } from './src/screens/UseReducerScreen';
//import { UseEffectScreen } from './src/screens/UseEffectScreen';
//import { FormSreen } from './src/screens/FormScreen';
import { NavigationContainer } from '@react-navigation/native';
//import { StackNavigator } from './src/navigator/StackNavigator';
//import { PokemonNavigator } from './src/navigator/PokemonNavigator';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { AuthProvider } from './src/context/AuthContext';


const App = () => {

    return (
        <NavigationContainer>
            <AppState>
                <DrawerNavigator/>
            </AppState>
        </NavigationContainer>
    );

}

const AppState = ( { children } : { children: ReactNode } ) => {
    return (
        <AuthProvider>
            { children }
        </AuthProvider>
    );
}


export default App;
