import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function IncomesExpenses() {
  return (
    <View style={stylesIncomeExpenses.segundaSecao}>
      <View style={stylesIncomeExpenses.linha}>
        <View style={stylesIncomeExpenses.coluna}>
          <Text style={stylesIncomeExpenses.textoPreto}>INCOMES</Text>
          <Text style={stylesIncomeExpenses.textoMaiorPreto}>$267</Text>
        </View>

        <View style={stylesIncomeExpenses.coluna}>
          <Text style={stylesIncomeExpenses.textoPreto}>EXPENSES</Text>
          <Text style={stylesIncomeExpenses.textoMaiorPreto}>$255</Text>
        </View>
      </View>

      <View style={stylesIncomeExpenses.linha}>
        <View style={stylesIncomeExpenses.coluna}>
          <Text
            style={stylesIncomeExpenses.textoPequeno}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing 
          </Text>
        </View>
      </View>
    </View>
  );
}

const stylesIncomeExpenses = StyleSheet.create({
  segundaSecao: {
    flex: 1,
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginTop: 40,
    elevation: 4,
    alignSelf: 'center', // Novo
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  coluna: {
    alignItems: 'center',
  },
  textoPreto: {
    fontSize: 16,
    color: '#000',
  },
  textoMaiorPreto: {
    fontSize: 35,
    fontWeight: '700',
    color: '#000',
    marginTop: 5,
  },
  textoPequeno: {
    fontSize: 16,
    color: '#7D7D7D',
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
  },
});
