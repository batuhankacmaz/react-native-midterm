import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Posts from './screens/posts';
import Users from './screens/users';

const App = () => {
  //const Stack = createStackNavigator();
  const materialTab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <materialTab.Navigator barStyle={{backgroundColor: '#006400'}}>
        <materialTab.Screen
          name="Users "
          component={Users}
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

/* const CitiesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cities"
      screenOptions={{
        // headerStyle: { backgroundColor: '#009387' },
        // headerTintColor: '#fff',
        // headerTitleStyle: { fontWeight: 'bold' },
        headerShown: false,
      }}>
      <Stack.Screen
        name="CityStatistic"
        component={CityStatistic}
        options={{title: 'City Statistic'}}
      />
      <Stack.Screen
        name="CityDetails"
        component={CityStatisticDetails}
        options={{title: 'City Details Page'}}
      />
    </Stack.Navigator>
  );
}; */
