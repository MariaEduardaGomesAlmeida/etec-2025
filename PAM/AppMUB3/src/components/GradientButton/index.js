import React from 'react';
import styles from "./style";
import { Text, Pressable, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
 
export default function GradientButton({ title, onPress, variant = 'filled' }) {
  const filled = variant === 'filled';
 
  return (
<Pressable onPress={onPress} style={styles.pressable}>
<LinearGradient
        colors={filled ? ['#4dd0e1', '#00acc1'] : ['transparent', 'transparent']}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        style={[
          styles.container,
          filled ? null : styles.outlined,
        ]}
>
<Text style={[styles.text, filled ? styles.filledText : styles.outlinedText]}>
          {title}
</Text>
</LinearGradient>
</Pressable>
  );
}
 