import React, { useState } from 'react';
import styles from "./style";
import {
  View, Text, TextInput, StyleSheet, Alert, KeyboardAvoidingView, Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../../components/GradientButton/index';
 
export default function WelcomeScreen({ navigation }) {
  const [name, setName] = useState('');
 
  const handlePlay = () => {
    if (!name.trim()) {
      Alert.alert('Ops!', 'Informe seu nome para continuar 😃');
      return;
    }
    navigation.navigate('Level', { playerName: name.trim() });
  };
 
  return (
<LinearGradient colors={['#000', '#0d2c34']} style={styles.root}>
<KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined })}
        style={styles.container}
>
<View style={styles.logoArea}>
          {/* Substitua por <Image source={require('../../assets/logo.png')} …/> se tiver o logo */}
<Text style={styles.logoTxt}>MU<span style={{ fontWeight: '400' }}>B3</span></Text>
<Text style={styles.subtitle}>Museu da Bolsa do Brasil</Text>
</View>
 
        <Text style={styles.label}>BEM-VINDO AO <Text style={styles.bold}>QUIZ</Text></Text>
 
        <View style={styles.inputWrapper}>
<Text style={styles.labelSmall}>NOME & SOBRENOME</Text>
<TextInput
            placeholder="Ex: Marinouttto"
            placeholderTextColor="#84d9e6"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
</View>
 
        <View style={styles.buttons}>
<GradientButton title="JOGAR" onPress={handlePlay} variant="filled" />
<View style={{ height: 20 }} />
<GradientButton
            title="INSTRUÇÕES"
            onPress={() => navigation.navigate('Instruction')}
            variant="outlined"
          />
</View>
</KeyboardAvoidingView>
</LinearGradient>
  );
}
 