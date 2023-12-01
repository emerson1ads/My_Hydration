import React from 'react';
import {View,Text, Pressable, TextInput} from 'react-native';
import estilo from './estilo';
import { useDataContext } from '../../service/dataContext';

const Tempo = () => {

    const {
        aguaSalva, setAguaSalva, quantidadeAdicional, setQuantidadeAdicional
    } = useDataContext();


    return(
        <View style={estilo.container}>
            <View style = {estilo.boxCentral}>
                <Text style = {estilo.titulo}>DETERMINE UM HORARIO DE INICIO E TERMINO</Text>
                <Text style = {estilo.linha}>_________________________________</Text>
                <View style = {estilo.rowBox}>
                    <View style = {estilo.row}>
                        <Text style = {estilo.label}>INICIO</Text>
                        <TextInput
                            style={estilo.input}
                            placeholder="digite"
                            keyboardType='numeric'
                        />
                    </View>

                    <Text style={estilo.separador}>_________</Text>

                    <View style = {estilo.row}>
                        <Text style = {estilo.label}>FIM</Text>
                        <TextInput
                            style={estilo.input}
                            placeholder="Digite"
                        />
                    </View>
                </View>
                <Text style = {estilo.linha}>_________________________________</Text>

                <Text style = {estilo.titulo2}>INTEVALO DE TEMPO</Text>
                <View style = {estilo.bola}>
                    <Text style = {estilo.tempo}>2</Text>
                    <Text style = {estilo.tempo}>Horas</Text>
                </View>
                <Text style = {estilo.linha}>_________________________________</Text>
            </View>

            <Pressable style = {estilo.botao}>
                <Text style = {estilo.salva}>Salva</Text>
            </Pressable>
        </View>
    );
}

export default Tempo;