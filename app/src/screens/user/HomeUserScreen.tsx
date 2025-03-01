import React, { useEffect } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { BtnTouch } from '../../components/BtnTouch';
import { UserResponse } from '../../interfaces/userInterfaces';
import { useUserApi } from '../../hooks/useUserApi';
import { appTheme } from '../../themes/appTheme';
import { UserCard } from '../../components/UserCard';


export const HomeUserScreen = () => {

    const createUser: UserResponse ={
        id_user: '',
        username: '',
        email: '',
        image: '',
        password: '',
        update: '',
    }

    const navigation = useNavigation();

    const isFocused = useIsFocused();

    const { isLoading, loadUsers, listUser } = useUserApi();

    useEffect( () => {
        loadUsers();
    },[ isFocused ]);

    return(
        <View
            style={ appTheme.globalMargin }
        >
            <FlatList
                data={ Object.values( listUser ) }
                keyExtractor={ (item) => '#'+item.id_user }
                ListHeaderComponent={(
                    <View>
                        <Text
                            style={{
                                ...appTheme.title,
                                ...appTheme.globalMargin,
                                marginTop: 20
                            }}
                        >
                            Lista de usuarios
                        </Text>
                        <BtnTouch
                            title='Crear usuario'
                            onPress={ () => navigation.navigate("FormUserScreen",{ user: createUser }) }
                            background='pink'
                        />
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={ (!isLoading) }
                        onRefresh={ loadUsers }
                        colors={["pink"]}
                        progressBackgroundColor="black"
                    />
                }
                numColumns={2}
                renderItem={ ( { item } ) => (
                    <UserCard
                        user={ item }
                    />
                )}
            />
        </View>
    );
}
