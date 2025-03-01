import React, {useEffect} from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { useTareaApi } from '../../hooks/useTareaApi';
import { appTheme } from '../../themes/appTheme';
import { TareaCard } from '../../components/TareaCard';
import { BtnTouch } from '../../components/BtnTouch';
import { TareasResponse } from '../../interfaces/tareasInterfaces';

export const HomeTarea = () => {

    const { listTarea, isLoading, loadTarea } = useTareaApi();

    const navigation = useNavigation();

    const isFocused = useIsFocused();

    const create: TareasResponse = {
        _id:            '',
        titulo:         '',
        descripcion:    '',
        estado:         '',
        __v:            0
    }

    useEffect(() => {
        (isLoading) && loadTarea();
    },[ isFocused ]);

    return (
        <View
            style={ appTheme.globalContainer }
        >
            <FlatList
                data={ Object.values(listTarea) }
                keyExtractor={ (item) => '#'+item._id }
                ListHeaderComponent={(
                    <View>
                        <Text>
                            Pan de aguacate
                        </Text>
                        <BtnTouch
                            title="Crear tarea"
                            background='blue'
                            onPress={ () => navigation.navigate('FormTarea', { tarea: create }) }
                        />
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={ (isLoading) }
                        onRefresh={ loadTarea }
                        colors={ [ "pink", "violet" ] }
                        progressBackgroundColor="black"
                    /> 
                }
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={ ( {item} ) =>(
                    <TareaCard
                        tarea={item}
                    />
                )}
            />
        </View>
    );

}

