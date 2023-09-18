import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentsScreen';
import APIcall from './src/screens/APIcall';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen'

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
          name='APIcall'
          component={APIcall}
          options={{ title: 'API data' }}
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
        <Stack.Screen
          name='SquareScreen'
          component={SquareScreen}
          options={{title: 'Square'}}
         />
         <Stack.Screen 
         name='TextScreen'
         component={TextScreen}
         options={{title: 'Form'}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;