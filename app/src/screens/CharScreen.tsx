import React from 'react';
import { View, Text, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { LineChart, ProgressChart, PieChart, BarChart } from 'react-native-chart-kit';
import { appTheme } from '../themes/appTheme';

export const CharScreen = () => {

    const charConfig = {
        backgroundColor: 'white', // Fondo
        backgroundGradientFrom: "red", // Inicio
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

    return(
        <SafeAreaView
            style={{
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <ScrollView>
                <View>
                    <Text
                        style={ appTheme.title }
                    >
                        Line Char
                    </Text>
                </View>
                <LineChart
                    data={{
                        labels: [ "Enero", "Febrero", "Marzo", "Abril" ],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                ]
                            }
                        ]
                    }}
                    chartConfig={ charConfig }
                    width={ width * 0.9 }
                    height={ height * 0.3 }
                    yAxisLabel='$'
                    yAxisInterval={1}
                    style={{ borderRadius: 20 }}
                />
                <View>
                    <Text
                        style={ appTheme.title }
                    >
                        Progress Chart
                    </Text>
                    <ProgressChart
                        data={{
                            labels: [ "Pro1", "Pro2", "Pro3" ],
                            data:[
                                Math.random(),
                                Math.random(),
                                Math.random(),
                            ]
                        }}
                        width={ width * 0.9 }
                        height={ height * 0.3 }
                        strokeWidth={ 16 }
                        radius={ 32 }
                        hideLegend={ false }
                        chartConfig={ charConfig }
                        style={{ 
                            borderRadius: 20,
                            marginTop: 5
                        }}
                    />
                </View>
                <View>
                    <Text
                        style={ appTheme.title }
                    >
                        Pie Chart
                    </Text>
                    <PieChart
                      data={[
                          {
                            name: "Seoul",
                            population: 21500000,
                            color: "rgba(131, 167, 234, 1)",
                            legendFontColor: "#7F7F7F",
                            legendFontSize: 15
                          },
                          {
                            name: "Toronto",
                            population: 2800000,
                            color: "#F00",
                            legendFontColor: "#7F7F7F",
                            legendFontSize: 15
                          },
                          {
                            name: "Beijing",
                            population: 527612,
                            color: "red",
                            legendFontColor: "#7F7F7F",
                            legendFontSize: 15
                          },
                          {
                            name: "New York",
                            population: 8538000,
                            color: "#ffffff",
                            legendFontColor: "#7F7F7F",
                            legendFontSize: 15
                          },
                          {
                            name: "Moscow",
                            population: 11920000,
                            color: "rgb(0, 0, 255)",
                            legendFontColor: "#7F7F7F",
                            legendFontSize: 15
                          }
                      ]}
                      width={ width * 0.9 }
                      height={ height * 0.3 }
                      chartConfig={ charConfig }
                      accessor={"population"}
                      backgroundColor={"transparent"}
                      paddingLeft={"15"}
                      center={[10, 50]}
                    />
                </View>
                <BarChart
                    data={{
                            labels: [ "Enero", "Febrero", "Marzo", "Abril" ],
                            datasets:[
                                {
                                    data:[
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                    ]
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
            </ScrollView>
        </SafeAreaView>
    )
}
