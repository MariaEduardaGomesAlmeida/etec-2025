
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  root: { flex: 1 },
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 32 },
  logoArea: { alignItems: 'center', marginBottom: 40 },
  logoTxt: { color: '#4dd0e1', fontSize: 48, fontWeight: '900' },
  subtitle: { color: '#4dd0e1', marginTop: 4, fontSize: 12 },
  label: { color: '#fff', textAlign: 'center', fontSize: 18, marginBottom: 24 },
  bold: { fontWeight: '700' },
  labelSmall: { color: '#fff', marginBottom: 6 },
  inputWrapper: { width: '100%', marginBottom: 40 },
  input: {
    borderWidth: 2,
    borderColor: '#4dd0e1',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: '#fff',
  },
  buttons: { width: '100%' },
});

export default styles;