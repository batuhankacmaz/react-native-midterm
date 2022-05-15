import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Posts from './screens/posts';
import Users from './screens/users';
import UserDetail from './screens/userDetail';

const Stack = createStackNavigator();
const materialTab = createMaterialBottomTabNavigator();

const UsersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Users"
      screenOptions={{
        // headerStyle: { backgroundColor: '#009387' },
        // headerTintColor: '#fff',
        // headerTitleStyle: { fontWeight: 'bold' },
        headerShown: false,
      }}>
      <Stack.Screen name="Users" component={Users} options={{title: 'Users'}} />
      <Stack.Screen
        name="UserDetail"
        component={UserDetail}
        options={{title: 'UserDetail'}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <materialTab.Navigator barStyle={{backgroundColor: '#6a5acd'}}>
        <materialTab.Screen
          name="Users "
          component={UsersStack}
          /*  options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="map" color={'#fdfdfd'} size={20} />
            ),
          }} */
        />
        <materialTab.Screen
          name="Posts"
          component={Posts}
          /* options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="city" color={'#fdfdfd'} size={20} />
            ),
          }} */
        />
      </materialTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
