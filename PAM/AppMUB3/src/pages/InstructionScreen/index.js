import React from 'react';
import styles from "./style";
import { ScrollView, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
 
export default function InstructionScreen() {
  return (
<LinearGradient colors={['#000', '#0d2c34']} style={{ flex: 1 }}>
<ScrollView contentContainerStyle={styles.container}>
<Text style={styles.title}>Como jogar</Text>
<Text style={styles.paragraph}>
          1. Digite seu nome completo na tela inicial e pressione “Jogar”.{'\n\n'}
          2. Escolha o nível de dificuldade que prefere.{'\n\n'}
          3. Responda às perguntas no tempo limite para marcar pontos.{'\n\n'}
          4. Quanto mais difícil o nível, maior a pontuação por acerto!
</Text>
</ScrollView>
</LinearGradient>
  );
}
 