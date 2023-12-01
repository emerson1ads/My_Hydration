import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DataProvider } from './service/dataContext';

import Home from './componentes/TelaInicial/index';
import Copo from './componentes/TelaCopo/index';
import Tempo from './componentes/TelaTempo/index';
import iconeHome from './assets/home.png';
import iconeCopo from './assets/copo.png';
import iconeTempo from './assets/tempo.png';
import { Image } from 'react-native';

const Navegacao = createBottomTabNavigator();

const app = () => {
  return(
    <NavigationContainer>
      <DataProvider>
        <Navegacao.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          tabBarStyle: {
            backgroundColor: '#017B8B',
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "bold",
          },

          tabBarInactiveTintColor: 'black', // Cor do texto quando inativo
          tabBarActiveTintColor: '#FFF', // Cor do texto quando ativo
        }}>
          <Navegacao.Screen name='Home' component={Home}  options={
              { headerShown: false ,
                tabBarIcon: () => (
                  <Image
                  source = {iconeHome}
                  style = {{width: 20, height: 32}}
                  />
              )
            }}/>
          <Navegacao.Screen name='Copo' component={Copo}  options={
            {
              headerShown: false,
              tabBarIcon: () => (
                <Image
                source = {iconeCopo}
                style = {{width: 20, height: 32}}
                />
              ) 
            }}/>
          <Navegacao.Screen name='Tempo' component={Tempo}  options={
            { 
              headerShown: false,
              tabBarIcon: () => (
                <Image
                source = {iconeTempo}
                style = {{width: 40, height: 32}}
                />
              )
              }}/>
        </Navegacao.Navigator>
      </DataProvider>
    </NavigationContainer>
  );
}

export default app;