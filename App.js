import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentsScreen';
import GirlFriends from './src/screens/GirlFriends';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='ComponentScreen'
          component={ComponentScreen}
          options={{ title: 'Friends' }}
        />
        <Stack.Screen
          name='GirlFriends'
          component={GirlFriends}
          options={{ title: 'Girl Friends' }}
        />
        <Stack.Screen 
          name='ImageScreen'
          component={ImageScreen}
          options={{title: 'Images'}}
        />
        <Stack.Screen 
        name='CounterScreen'
        component={CounterScreen}
        options={{title: 'Counter'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;