import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';


export const SettingsScreen = () => {

    const { authState } = useContext(AuthContext);

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalContainer
            }}
        >
            <Text>
                SettingsScreen
            </Text>
            <Text
                style={ appTheme.title }
            >
                { JSON.stringify(authState.formData) }
            </Text>
            <Text
                style={ appTheme.title }
            >
                { JSON.stringify(authState) }
            </Text>
        </View>
    )
}
