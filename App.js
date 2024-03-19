import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import { Image } from 'react-native';
import Toast from 'react-native-toast-message';
import Receipts from './src/screens/Receipts';
import Map from './src/screens/Map';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function HomeScreen() {
  return (
    <Tab.Navigator 
      initialRouteName='home' 
      screenOptions={{headerShown:false, tabBarShowLabel:false}}
    >
      <Tab.Screen 
        name='home' 
        component={Dashboard} 
        options={{ tabBarIcon: ({focused}) => <Image source={require('./assets/home.png')} />}} 
      />
      <Tab.Screen 
        name='map' 
        component={Map} 
        options={{tabBarIcon: () => <Image source={require('./assets/map.png')} />}} 
      />
      <Tab.Screen 
        name='report'   
        component={Receipts}
        options={{tabBarIcon: () => <Image source={require('./assets/receipt.png')} />}} 
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Welcome} name='welcome' options={{headerShown:false}} />
        <Stack.Screen component={Login} name='login' options={{headerShown:false}} />
        <Stack.Screen component={HomeScreen} name='dashboard' options={{headerShown:false}} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

