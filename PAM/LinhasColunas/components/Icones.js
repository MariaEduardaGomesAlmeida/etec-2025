import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Icones() {
  return (
    <View style={stylesIcones.container}>
      <View style={stylesIcones.SegundaLinha}>
        {/* Ícone 1 */}
        <View style={stylesIcones.coluna}>
          <View style={stylesIcones.caixinhaIcone}>
            <Image
              style={stylesIcones.imagem}
              source={require('../assets/search.svg')}
            />
          </View>
          <Text style={stylesIcones.texto}>Lorem</Text>
        </View>

        {/* Ícone 2 */}
        <View style={stylesIcones.coluna}>
          <View style={stylesIcones.caixinhaIcone}>
            <Image
              style={stylesIcones.imagem}
              source={require('../assets/gear-fill.svg')}
            />
          </View>
          <Text style={stylesIcones.texto}>Ipsum</Text>
        </View>

        {/* Ícone 3 */}
        <View style={stylesIcones.coluna}>
          <View style={stylesIcones.caixinhaIcone}>
            <Image
              style={stylesIcones.imagem}
              source={require('../assets/bar-chart-line-fill.svg')}
            />
          </View>
          <Text style={stylesIcones.texto}>Dolor</Text>
        </View>
      </View>
    </View>
  );
}

const stylesIcones = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },

  SegundaLinha: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },

  coluna: {
    flex: 1,
    alignItems: 'center',
  },

  caixinhaIcone: {
    width: 100,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    elevation: 3, 
  },

  imagem: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  texto: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
});
