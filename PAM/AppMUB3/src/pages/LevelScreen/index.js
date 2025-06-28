import React from 'react';
import styles from "./style";
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../../components/GradientButton/index';
 
export default function LevelScreen({ route }) {
  const { playerName } = route.params;
 
  const selectLevel = (level) => {
    // Aqui você pode navegar para a tela de perguntas,
    // ex: navigation.navigate('Quiz', { level, playerName })
    console.log(`>>> ${playerName} escolheu: ${level}`);
  };
 
  return (
<LinearGradient colors={['#000', '#0d2c34']} style={styles.root}>
<View style={styles.container}>
<Text style={styles.title}>ESCOLHA O SEU <Text style={styles.bold}>NÍVEL</Text></Text>
 
        {['FÁCIL', 'INTERMEDIÁRIO', 'DIFÍCIL', 'IMPOSSÍVEL'].map((lv) => (
<View key={lv} style={{ width: '100%', marginVertical: 12 }}>
<GradientButton title={lv} onPress={() => selectLevel(lv)} variant="outlined" />
</View>
        ))}
</View>
</LinearGradient>
  );
}
 
