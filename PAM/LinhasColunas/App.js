import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


{/* importação do componente */}
import Header from './components/Header';
import IncomesExpenses from './components/IncomesExpenses';

 
export default function App() {
  return (
    <View style={styles.container}>
     
       {/*'utilização do componente*/}

       {/*Header*/}
       <Header />


      {/*Incomes & Expenses */}
      <IncomesExpenses/>

      
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
 
  
});