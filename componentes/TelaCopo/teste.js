import React,{useState} from 'react';
import {View,Text, TextInput, Button} from 'react-native';
import estilo from './estilo';
import calcularQP from '../../service/calcularQP';
import {useNavigation} from '@react-navigation/native';

const Copo = () => {

    const [peso, setPeso] = useState("");
    const [resultado, setResultado] = useState(null);

    function calcularResultado(){
        try{
            const resultadoCalculado = calcularQP(peso);
            setResultado(resultadoCalculado);
        } catch {
            setResultado(null);
        }
    }
    const navigation = useNavigation();

    function salvaResultado() {
        try{
            const resultadoCalculado = calcularQP(peso);
            setResultado(resultadoCalculado);
            navigation.navigate('Home', {aguaSalva: resultadoCalculado});
        }catch{
            setResultado(null);
        }
    }

    return(
        <View style={estilo.container}>
            <TextInput
                placeholder = "Digite Seu Peso"
                keyboardType = "numeric"
                value = {peso}
                onChangeText = {(text) => setPeso(text)}
            />
            <Button title='calcular' onPress={calcularResultado} />
           
            <Text>{resultado}</Text>
          
            <Button title = 'salvar' onPress={salvaResultado} />
        </View>
    );
}

export default Copo;