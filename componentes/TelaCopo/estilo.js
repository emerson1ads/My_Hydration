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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#02A7BD'
    },

    box: {
        backgroundColor: "#00E1C6",
        width: 345,
        height: 653,
        alignItems: "center",
        borderRadius: 25,
        textAlign: "center",
        padding: 8
    },

    titulo: {
        fontFamily: "Kavoon",
        fontSize: 36
    },

    texto1: {
        fontSize: 18,
        fontFamily: "Kavoon",
        textAlign: "center",
        
    },

    pesoInput: {
        width: 152,
        height: 26,
        backgroundColor: '#D9D9D9',
        marginBottom: 11,
    },
    resultadoInput: {
        width: 152,
        height: 26,
        backgroundColor: '#D9D9D9',
        marginBottom: 4,
    },

    vlInput: {
        width: 152,
        height: 26,
        backgroundColor: '#D9D9D9',
        marginBottom: 6,
    },

    linha: {
        color: "#fff",
    },

    pesoTexto: {
        fontFamily: 'Kavoon',
        fontSize: 20,
        marginVertical: 11,
        color: '#fff'
    },

    mlTexto: {
        fontFamily: 'Kavoon',
        fontSize: 20,
        marginVertical: 6,
        color: '#fff'
    },

    vlTexto: {
        fontFamily: 'Kavoon',
        fontSize: 20,
        marginVertical: 5,
        color: '#fff'
    },

    qvTexto: {
        fontSize: 16
    }
});

export default estilo;