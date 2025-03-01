import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { UserResponse } from '../interfaces/userInterfaces';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface Props{
    user: UserResponse
}


export const UserCard = ( { user }: Props ) => {

    const navigation = useNavigation();
    const { width } = Dimensions.get('window');

    return(
        <TouchableOpacity
            key={ `${user.id_user}${user.update}` }
            activeOpacity={0.9}
            onPress={ () => navigation.navigate('FormUserScreen',{ user: user }) }
        >
            <View
                style={{
                    ...style.cardContainer,
                    backgroundColor: "green",
                    width: width * 0.40,
                }}
            >
                <Text
                    style={ style.title }
                >
                    { `Usuario: \n ${user.username} \n` }
                    { `E-mail: \n ${user.email} \n` }
                </Text>
                <FontAwesome
                    style={ style.icon }
                    name='users'
                    size={75}
                    color='white'
                />
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        height: 120,
        width: 120,
        marginBottom: 25,
        borderRadius: 20,
        overflow: "hidden"
    },
    title:{
        marginHorizontal: 15,
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    icon:{
        position: "absolute",
        bottom: 20,
        right: 15,
        opacity: 0.5,
    }
});

