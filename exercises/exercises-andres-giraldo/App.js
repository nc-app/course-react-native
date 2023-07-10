
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

const Menu = createDrawerNavigator()

// Components
import Card01 from './src/cards/Card01';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Card01 />
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name='Home' component={Home} />
        <Menu.Screen name='AboutUs' component={AboutUs} />
        <Menu.Screen name='ContactUs' component={ContactUs} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});
