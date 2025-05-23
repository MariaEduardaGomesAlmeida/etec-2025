// Header.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Icones from './Icones';
 
export default function  Header() {
   return (
      <View style={stylesHeader.container}>
       
        {/* Primeira Seção - Cabeçalho */}
        <View style={stylesHeader.primeiraSecao}>
         
          {/* Saldo Total */}
          <View style={stylesHeader.PrimeiraLinha}>
            <View style={stylesHeader.coluna}>
              <Text style={stylesHeader.textoA}>Lorem ipsum</Text>
              <Text style={stylesHeader.textoMaior}>$236,678.25</Text>
              
            </View>
             
          </View>
       
         
          </View>
          {/* Icones */}
          <Icones/>
         
        </View>
    
)};

const stylesHeader = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF3B30',
      width: '100%',
      padding: 25,
      paddingTop: 50,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      alignItems: 'center',
    },
    
    // Primeira Seção (Cabeçalho)
  primeiraSecao: {
    flex: 1,
    backgroundColor: '#FF3B30',
    width: '100%',
    padding: 25,
    paddingTop: 50,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
  },
 
  PrimeiraLinha: {
    backgroundColor: '#fff',
    width: '100%',
    height: 150,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 20,
  },
 
  texto: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  textoA: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
 
  textoMaior: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
 
});