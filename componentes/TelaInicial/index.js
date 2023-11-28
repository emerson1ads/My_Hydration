import React,{useState, useEffect} from 'react';
import {View,Text, Image,ScrollView, Pressable} from 'react-native';
import estilo from './estilo';
import pegarData from '../../service/data';
import qAgua from '../../service/qAgua';
import checktm from '../../service/checktm';
import { useRoute } from '@react-navigation/native';

const Home = () => {

    const [data, setData] = useState("");
    const [aguaq, setAguaq] = useState(0);
    const [tm, setTm] = useState([]);
    const route = useRoute();
    const aguaSalva = route.params?.aguaSalva || 2000;
    const quantidadeAdicional = route.params?.quantidadeAdicional || 200;

    useEffect(()=> {
        const dataAtual = pegarData();
        setData(dataAtual);
    }, []);
    
    function aguaBebida(){
        const novaQuatidade = qAgua(aguaq, aguaSalva, quantidadeAdicional);
        setAguaq(novaQuatidade);
        const novoRegistro = checktm();
        setTm(prevTm => [novoRegistro, ...prevTm]);
    }
    
    return(
        <View style={estilo.container}>
            

            <Pressable  onPress={aguaBebida} style={estilo.circulo}>
                <Text style={estilo.texto}>META DO DIA</Text>
                <Text style={estilo.texto1}>{aguaq}/{aguaSalva}ML</Text>
            </Pressable>

            <View style={estilo.tp1}>
                <View style={estilo.thj}>
                    <Text style={estilo.tData}>HOJE - {data}</Text>
                </View>
                <Text style={estilo.linha}>________________________________</Text>
                <ScrollView style={estilo.tempos}>
                    {tm.map((registro, index) => (
                        <Text key={index} style={estilo.tp}>{registro}</Text>
                    ))}
                    
                </ScrollView>
                <Text style={estilo.linha}>________________________________</Text>
            </View>
            
        </View>
    );
}

export default Home;