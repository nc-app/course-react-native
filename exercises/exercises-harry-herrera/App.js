import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Components
import Card01 from './src/cards/Card01.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Card01 />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
