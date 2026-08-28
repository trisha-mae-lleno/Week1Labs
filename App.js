import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';
const Stack = createNativeStackNavigator();
export default function App() {

return (
<NavigationContainer>

<Stack.Navigator initialRouteName="Hello">

<Stack.Screen
name="Hello"
component={WelcomeScreen}
options={{ headerShown: false }}

/>
<Stack.Screen
name="AddTask"
component={AddTaskScreen}
options={{ title: 'My Tasks' }}

/>
</Stack.Navigator>
</NavigationContainer>

);}