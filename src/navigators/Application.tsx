/** @format */

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import BottomNavigation from './BottomNavigation/BottomNavigation';
import {AddTodo} from '../screens';
import {TApplicationStackParamList} from '../types/navigation';

const Stack = createStackNavigator<TApplicationStackParamList>();

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen name="AddTodo" component={AddTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
