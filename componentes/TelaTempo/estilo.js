import { StyleSheet } from "react-native";
import * as Font from 'expo-font';
// Importa a fonte Kavoon
import { useFonts, Kavoon_400Regular } from '@expo-google-fonts/kavoon';

// Carrega a fonte Kavoon
Font.loadAsync({
  Kavoon: Kavoon_400Regular,
});

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#02A7BD',
    },

    boxCentral: {
        marginTop: 50,
        width: 342,
        height: 600,
        backgroundColor: "#00E1C6",
        borderRadius: 35,
        alignItems: "center"
    },

    titulo: {
        fontFamily: "Kavoon",
        fontSize: 30,
        marginVertical: 10,
        width: 300,
        textAlign: "center"
    },

    titulo2: {
        fontFamily: "Kavoon",
        fontSize: 30,
        marginVertical: 10,
        width: 200,
        textAlign: "center"
    },

    linha: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20
    },

    rowBox: {
        flexDirection: "row",
        marginVertical: 35
    },

    row: {
        marginHorizontal: 40,
        alignItems: "center"
    },

    label: {
        fontFamily: "Kavoon",
        fontSize: 20
    },

    input: {
        width: 80,
        height: 20,
        backgroundColor: "#FFF"
    },

    separador: {
        marginTop: 22
    },

    bola: {
        width: 135,
        height: 135,
        backgroundColor: "#FFF",
        borderRadius: 70,
        alignItems: "center",
        paddingTop: 17
    },

    tempo: {
        fontFamily: "Kavoon",
        fontSize: 30
    },
    
    botao: {
        width: 162,
        height: 34,
        backgroundColor: "#00E1C6",
        borderRadius: 15,
        marginVertical:17,
        alignItems: "center",
        justifyContent: "center"
    },
    salva: {
        fontFamily: "Kavoon",
        fontSize: 20,
        textAlign: "center"
    },
});

export default estilo;