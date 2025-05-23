import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
 
const App = () => {
  const [username, setUsername] = useState('');
  const [adress, setAdress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
 
  // Função que é chamada quando o botão de login é pressionado
  const handleLogin = () => {
    Alert.alert(`Usuário: ${username} cadastrado com sucesso!`);
  };
 
  // Função que limpa os campos
  const btnLimpar = () => {
    setUsername('');
    setAdress('');
    setPhoneNumber('');
    setEmail('');
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={adress}
        onChangeText={setAdress}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Telefone"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.containerBtn}>
        <Button title="Cadastrar" onPress={handleLogin} />
        <Button title="Limpar" onPress={btnLimpar} color="#f44336" />
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '80%',
  },
  containerBtn: {
    width: '80%',
    marginTop: 20,
  },
});
 
export default App;