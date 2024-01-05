import React, { useState } from 'react';
import {View,Text, Pressable, TextInput,  Switch} from 'react-native';
import estilo from './estilo';
import { useDataContext } from '../../service/dataContext';
import {validarInicio, validarFim} from '../../service/validarInicioeFim';

const Tempo = () => {

    const {
        aguaSalva, setAguaSalva, quantidadeAdicional, setQuantidadeAdicional
    } = useDataContext();

    const [inicio, setInicio] = useState();
    const [fim, setFim] = useState();
    const [erroInicio, setErroInicio] = useState();
    const [erroFim, setErroFim] = useState();
    const [isSomAtivo, setIsSomAtivo] = useState(true);

    
        const salvar = () => {
            validarInicio(inicio, (mensagemErroInicio) => setErroInicio(mensagemErroInicio));
            validarFim(fim, (mensagemErroFim) => setErroFim(mensagemErroFim));
        
            console.log("Inicio: ", inicio, "Fim: ", fim, "ErroInicio: ", erroInicio, "ErroFim: ", erroFim);
        }
        
    

    return(
        <View style={estilo.container}>
            <View style = {estilo.boxCentral}>
                <Text style = {estilo.titulo}>DETERMINE UM HORARIO DE INICIO E TERMINO</Text>
                <Text style = {estilo.linha}>_________________________________</Text>
                <View style = {estilo.rowBox}>
                    <View style = {estilo.row}>
                        <Text style = {estilo.label}>INICIO</Text>
                        <TextInput
                            textAlign='center'
                            style={estilo.input}
                            placeholder="De 0 Até 24"
                            keyboardType='numeric'
                            onChangeText={(text) => {
                                setInicio(text);
                                validarInicio(text, (mensagemErroInicio) => setErroInicio(mensagemErroInicio));}}
                            onBlur={() => validarInicio(inicio, (mensagemErroInicio) => setErroInicio(mensagemErroInicio))}
                        />
                    </View>

                    <Text style={estilo.separador}>_________</Text>

                    <View style = {estilo.row}>
                        <Text style = {estilo.label}>FIM</Text>
                        <TextInput
                           textAlign='center'
                           style={estilo.input}
                           placeholder="De 0 Até 24"
                           keyboardType='numeric'
                           onChangeText={(text) => {
                               setFim(text);
                               validarFim(text, (mensagemErroFim) => setErroFim(mensagemErroFim), inicio);
                            }}
                            onBlur={() => validarFim(fim, (mensagemErroFim) => setErroFim(mensagemErroFim), inicio)}
                            />
                    </View>
                </View>
                {erroInicio !== '' && <Text style={estilo.erroMsg}>{erroInicio}</Text> }
                {erroFim !== '' && <Text style={estilo.erroMsg}>{erroFim}</Text> }
                <Text style = {estilo.linha}>_________________________________</Text>

                <Text style={estilo.titulo2}>ATIVAR OU DESATIVAR SOM</Text>
                <View style={estilo.row}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#00FF00" }}
                        thumbColor={isSomAtivo ? "#FFFFFF" : "#000000"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setIsSomAtivo(!isSomAtivo)}
                        value={isSomAtivo}
                        style={{ transform: [{ scaleX: 2.5 }, { scaleY: 2.5 }] }}
                    />
                </View>
            </View>

            <Pressable onPress={salvar} style = {estilo.botao}>
                <Text style = {estilo.salva}>Salva</Text>
            </Pressable>
        </View>
    );
}

export default Tempo;