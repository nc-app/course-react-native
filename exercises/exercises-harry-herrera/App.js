
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

// Components
import Home from './src/pages/Home';
import ContactUs from './src/pages/ContactUs';
import AboutUs from './src/pages/About';
import Footer from './src/pages/Footer';
import Cardosky from './src/pages/Card1';

const Menu = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name='Home' component={Home} />
        <Menu.Screen name='AboutUs' component={AboutUs} />
        <Menu.Screen name='ContactUs' component={ContactUs} />
        <Menu.Screen name='Footer' component={Footer} />
        <Menu.Screen name='card' component={Cardosky} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}

