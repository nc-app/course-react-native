
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// Import
import Card01 from './src/cards/Card01';

// Components
import Home from './src/pages/Home.jsx';
import ContactUs from './src/pages/ContactUs.jsx';
import About from './src/pages/About.jsx';

export default function App() {
  return (



  <NavigationContainer>
    <Menu.Navigator>
      <Menu.Screen name='Home' component={Home}/>
      <Menu.Screen name='ContactUs' component={ContactUs}/>
      <Menu.Screen name='About' component={About}/>

    </Menu.Navigator>

  </NavigationContainer>
 
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
