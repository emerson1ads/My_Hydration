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
        alignItems: "center",
    },

   header: {
    width: "100%",
    height: 220,
    backgroundColor: "#017B8B",
    paddingTop: 50,
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
   },

   img: {
    width: 100,
    height: 100,
    borderRadius: 50
   },

   text: {
    fontFamily: "Kavoon",
    fontWeight: "700",
    fontSize: 28,
    color: "#fff",
    marginTop: 10,
    textAlign: "center"
   },

   circulo: {
    width: 250,
    height: 250,
    backgroundColor: "#00E1C6",
    borderRadius: 150,
    marginTop: 140,
    justifyContent: "center",
    alignItems: "center"
   },

   texto: {
    fontSize: 32,
    color: "#000",
    fontWeight: "bold"
   },

   texto1: {
    fontSize: 24,
    fontWeight: "500",
    fontStyle: "italic"
   },
    tp1:{
        marginTop: 20,
        height: 270       //
    },


   tp: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#fff',
    alignItems:"center",
    textAlign: "center"
   },

   tData: {
    fontSize: 22,
    fontWeight: 'bold',

   },

   linha: {
    color: "#fff",

   },
   thj:{
    backgroundColor: "#fff",
    padding: 7,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginBottom: 10,
    backgroundColor: "#00E1C6",
   }
});

export default estilo;