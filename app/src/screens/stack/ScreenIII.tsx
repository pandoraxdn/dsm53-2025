import React from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../../themes/appTheme';
import { Fab } from '../../components/Fab';
import { StackActions } from '@react-navigation/native';
import { RootStackParams } from '../../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParams,'ScreenIII'>{};

export const ScreenIII = ( { navigation }: Props ) => {

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
                ScreenIII
            </Text>
            <Fab
                title='<-'
                position='button_left'
                onPress={ () => navigation.goBack() }
            />
            <Fab
                title='->'
                position='button_right'
                onPress={ () => navigation.dispatch( StackActions.popToTop() ) }
            />
        </View>
    );
}
