import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import WelcomeScreen from './src/pages/WelcomeScreen/index';
import LevelScreen from './src/pages/LevelScreen/index';
import InstructionScreen from './src/pages/InstructionScreen/index';
 
const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator
        screenOptions={{
          headerShown: false,        // todas as telas “cheias”
          contentStyle: { backgroundColor: 'transparent' },
        }}
>
<Stack.Screen name="Welcome" component={WelcomeScreen} />
<Stack.Screen name="Level" component={LevelScreen} />
<Stack.Screen name="Instruction" component={InstructionScreen} />
</Stack.Navigator>
</NavigationContainer>
  );
}