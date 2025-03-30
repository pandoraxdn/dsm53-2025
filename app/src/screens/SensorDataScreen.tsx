import React from 'react';
import { View, Text, ScrollView, Dimensions, RefreshControl, ActivityIndicator } from 'react-native';
import { LineChart, ProgressChart, PieChart, BarChart } from 'react-native-chart-kit';
import { appTheme } from '../themes/appTheme';
import { useSensorData } from '../hooks/useSensorData';

export const SensorDataScreen = () => {

    const charConfig = {
        backgroundColor: 'white', // Fondo
        backgroundGradientFrom: "violet", // Inicio
        backgroundGradientTo: "black", // Fin
        decimalPlaces: 2, // Número de decimales
        color: ( opacity = 1 ) => `rgba(255,255,255,${opacity})`,
        labelColor: ( opacity = 1 ) => `rgba(255,255,255,${opacity})`,
        style:{
            borderRadius: 20,
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "white",
        }
    }

    const height = Dimensions.get("window").height;
    const width = Dimensions.get("window").width;

    const { isLoading, loadData, data, today, yesterday, beforeYesterday } = useSensorData();


    return (!isLoading && today?.labels != undefined) 
        ? (
            <View
                style={{
                    ...appTheme.globalContainer,
                    ...appTheme.globalMargin,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <ActivityIndicator
                    color="black"
                    size={75}
                />
            </View>
        )
        : (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={ (!isLoading) }
                        onRefresh={ loadData }
                        colors={ ["pink","black","violet"] }
                        progressBackgroundColor="black"
                    />
                }
            >
                <View>
                    <Text
                        style={{
                            ...appTheme.title,
                            color: "black",
                            fontWeight: "bold",
                            textAlign: "center",
                            fontSize: 25
                        }}
                    >
                        { `Información del Sensor Número de registros(documents): ${data?.total}` }
                    </Text>
                </View>
                <View
                    style={{ alignItems: "center" }}
                >
                    <Text
                        style={{
                            ...appTheme.title,
                            textAlign: "center"
                        }}
                    >
                        Información de hoy
                    </Text>
                    <Text
                        style={{
                            ...appTheme.title,
                            textAlign: "center",
                            fontSize: 20
                        }}
                    >
                        { `Maximo valor: ${today?.max}` }
                    </Text>
                    <Text
                        style={{
                            ...appTheme.title,
                            textAlign: "center",
                            fontSize: 20
                        }}
                    >
                        { `Mínimo valor: ${today?.min}` }
                    </Text>
                    <LineChart
                        data={{
                            labels: [ ...today?.labels ?? [""] ],
                            datasets:[
                                {
                                    data: [ ...today?.values ?? [0] ],
                                }
                            ]
                        }}
                        chartConfig={ charConfig }
                        width={ width * 0.9 }
                        height={ height * 0.3 }
                        yAxisLabel='º'
                        yAxisInterval={1}
                        style={{ borderRadius: 20 }}
                    />
                    <BarChart
                        data={{
                                labels: [ ...yesterday?.labels ?? [""] ],
                                datasets:[
                                    {
                                        data: [ ...yesterday?.values ?? [0] ],
                                    }
                                ]
                            }}
                            chartConfig={ charConfig }
                            yAxisLabel='$'
                            yAxisSuffix=''
                            width={ width * 0.9 }
                            height={ height * 0.3 }
                            style={{ 
                                borderRadius: 20,
                                marginTop: 5
                            }}
                    />
                </View>
            </ScrollView>
        );

}
