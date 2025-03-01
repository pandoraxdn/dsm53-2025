import { StyleSheet } from "react-native";

export const appTheme = StyleSheet.create({
    globalMargin:{
        marginHorizontal: 20,
    },
    globalContainer:{
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    title:{
        fontSize: 30,
        marginBottom: 10,
    },
    input:{
        backgroundColor: "gray",
        borderRadius: 10,
        textAlign: "center",
        fontWeight: "bold",
        height: 80,
        width: 280,
        margin: 12,
        borderWidth: 5,
        borderColor: "pink",
        color: "pink",
    },
    avatar: {
        height: 200,
        width: 200,
        borderColor: "white",
        borderWidth: 5,
        borderRadius: 100
    },
    menuContainer:{
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10
    },
    menuBtn:{
        marginVertical: 10
    },
    textBtn:{
        fontSize: 20,
        color: "black",
        fontWeight: "bold"
    }
});
