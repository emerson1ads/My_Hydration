import React,{useState} from 'react';
import {View,Text, TextInput, Button} from 'react-native';
import Slider from '@react-native-community/slider';
import estilo from './estilo';
import calcularQP from '../../service/calcularQP';
import {useNavigation} from '@react-navigation/native';

const Copo = () => {

    const [peso, setPeso] = useState("");
    const [resultado, setResultado] = useState(null);
    const [quantidadeAdicional, setQuantidadeAdicional] = useState(50);
    const [resultadoEditavel, setResultadoEditavel] = useState(null);
    
    function calcularResultado(){
        try{
            const resultadoCalculado = calcularQP(peso);
            setResultado(resultadoCalculado);
            setResultadoEditavel(resultadoCalculado);
        } catch {
            setResultado(null);
            setResultadoEditavel(null);
        }
    }
    const navigation = useNavigation();


    function salvarResultadoEditado() {
        try {
            const valorEditado = parseInt(resultadoEditavel, 10) || 0;
            const valorAdicional = parseInt(quantidadeAdicional, 10) || 0;
            const resultadoFinal = valorEditado;
            navigation.navigate('Home', { aguaSalva: resultadoFinal, quantidadeAdicional: valorAdicional }); 
        } catch {
            setResultadoEditavel(null);
        }
    }        

    return(
        <View style={estilo.container}>
            <View style = {estilo.box}>
                <Text style={estilo.titulo}>ATENÇÂO</Text>
                <Text style={estilo.texto1}>De acordo com a Organização Mundial da Saúde, o cálculo de quanto de água devemos beber todos os dias é mais simples do que parece. São 35 ml diários para cada quilo que temos. Ou seja, uma pessoa de 60 kg deve fazer a conta 60 kg x 35 ml e descobrir que a recomendação é de 2,1 litros por dia</Text>
                
                <Text style={estilo.linha}>________________________________</Text>
                <Text style = {estilo.pesoTexto}>INFORME SEU PESO</Text>
                <TextInput
                    textAlign = "center"
                    style = {estilo.pesoInput}
                    placeholder = "Digite Seu Peso"
                    keyboardType = "numeric"
                    value = {peso}
                    onChangeText = {(text) => setPeso(text)}
                />
                <Button title='calcular' onPress={calcularResultado} />

                <Text style={estilo.linha}>________________________________</Text>
                <Text style = {estilo.mlTexto}>ML DIÁRIOS</Text>
                <TextInput
                    style={estilo.resultadoInput}
                    textAlign = "center"
                    placeholder="Digite o resultado"
                    keyboardType="numeric"
                    value={resultadoEditavel !== null ? resultadoEditavel.toString() : ''}
                    onChangeText={(text) => setResultadoEditavel(text)}
                />

                <Text style={estilo.linha}>________________________________</Text>
                <Text style={estilo.vlTexto}>VOLUME DO COPO</Text>
                <Text style={estilo.qvTexto}>{quantidadeAdicional} ml</Text>
                <Slider
                    style={{width: 200, height: 30}}
                    minimumValue={50}
                    maximumValue={1000}
                    step={50}
                    value={quantidadeAdicional}
                    onValueChange={(value) => setQuantidadeAdicional(value)}
                    minimumTrackTintColor="#0000FF"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="#FFFFFF"  
                />

                <Button title = 'salvar' onPress={() => {salvarResultadoEditado()} }/>
            </View>
        </View>
    );
}

export default Copo;