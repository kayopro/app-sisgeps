import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Autentication from './pages/Autentication';
import Shortly from './pages/Shortly';
import CreateAccount from './pages/CreateAccount';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Autentication"
          component={Autentication}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
        />
        <Stack.Screen
          name="Shortly"
          component={Shortly}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
