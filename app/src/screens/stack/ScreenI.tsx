import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../../themes/appTheme';
import { Fab } from '../../components/Fab';
import { RootStackParams } from '../../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { BtnTouch } from '../../components/BtnTouch';
import { AuthContext } from '../../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams,'ScreenI'>{};

interface User{
    username: string;
    lastname: string;
}

export const ScreenI = ( { navigation }: Props ) => {

    const { singIn, authState, logout, chageUserName } = useContext( AuthContext );

    const user1: User = {
        username: "mary",
        lastname: 'lozano'
    }

    const user2: User = {
        username: "juana",
        lastname: 'lopez'
    }

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin
            }}
        >
            <Text
                style={ appTheme.title}
            >
                ScreenI
            </Text>
            { (authState.isLoggenIn) ?
              (<BtnTouch
                title='Cerrar de sesión'
                background='violet'
                onPress={ () => logout() }
                />)
              :(<BtnTouch
                    title='Incio de sesion'
                    background='black'
                    onPress={ () => singIn() }
                />)
            }

            <BtnTouch
                title={ "Nombre usuario" }
                background='blue'
                onPress={ () => chageUserName("Isabel") }
            />
            <BtnTouch
                title={ user1.username }
                background='gray'
                onPress={ () => navigation.navigate('UserScreen',{ ...user1 }) }
            />
            <BtnTouch
                title={ user2.username }
                onPress={ () => navigation.navigate('UserScreen',{ ...user2 }) }
            />
            <Fab
                title='->'
                position='button_right'
                onPress={ () => navigation.navigate('ScreenII') }
            />
        </View>
    );
}
