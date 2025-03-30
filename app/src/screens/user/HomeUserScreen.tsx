import React from 'react';
import { View, Text } from 'react-native';
import { BtnTouch } from '../../components/BtnTouch';
import { UserResponse } from '../../interfaces/userInterfaces';
import { useNavigation } from '@react-navigation/native';

export const HomeUserScreen = () => {

    const navigation = useNavigation();

    const createUser: UserResponse = {
        id_user:    '',
        username:   '',
        email:      '',
        image:      '',
        password:   '',
        update:     ''
    }

    return(
        <View>
            <BtnTouch
                title='Crear Usuario'
                background='pink'
                onPress={ () => navigation.navigate("FormUserScreen",{ user: createUser }) }
            />
            <Text>

            </Text>
        </View>
    )
}
