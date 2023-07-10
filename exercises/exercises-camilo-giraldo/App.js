import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Import
import Card01 from './src/cards/Card01';

export default function App() {
  return (
    <LinearGradient
    colors={['#1A237E', '#DD2C00']}
    style={styles.container}
  >
    <Card01 />
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A237E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
