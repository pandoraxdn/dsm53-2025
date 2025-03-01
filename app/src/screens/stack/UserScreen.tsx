import React from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../../themes/appTheme';
import { Fab } from '../../components/Fab';
import { RootStackParams } from '../../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParams,'UserScreen'>{};

export const UserScreen = ( { navigation, route }: Props ) => {

    const { username, lastname } = route.params;

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
                UserScreen: { `${username} ${lastname}` }
            </Text>
            <Fab
                title='<-'
                position='button_left'
                onPress={ () => navigation.popToTop() }
            />
        </View>
    );
}
