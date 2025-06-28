import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pressable: { width: '100%' },
  container: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  outlined: {
    borderWidth: 2,
    borderColor: '#4dd0e1',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  text: { fontSize: 16, fontWeight: '600', letterSpacing: 1 },
  filledText: { color: '#000' },
  outlinedText: { color: '#4dd0e1' },
});

export default styles;