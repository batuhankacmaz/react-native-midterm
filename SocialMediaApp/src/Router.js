import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Posts from './screens/posts';
import Users from './screens/users';
import UserDetail from './screens/userDetail';
import PostDetail from './screens/postDetail';
import Albums from './screens/albums';
import Comments from './screens/comments';
import Photos from './screens/photos';
import Todos from './screens/todos';

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

const PostsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Postss"
      screenOptions={{
        // headerStyle: { backgroundColor: '#009387' },
        // headerTintColor: '#fff',
        // headerTitleStyle: { fontWeight: 'bold' },
        headerShown: false,
      }}>
      <Stack.Screen
        name="Postss"
        component={Posts}
        options={{title: 'Posts'}}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{title: 'PostDetail'}}
      />
      <Stack.Screen
        name="PostComments"
        component={Comments}
        options={{title: 'Comments'}}
      />
    </Stack.Navigator>
  );
};

const AlbumsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Albums"
      screenOptions={{
        // headerStyle: { backgroundColor: '#009387' },
        // headerTintColor: '#fff',
        // headerTitleStyle: { fontWeight: 'bold' },
        headerShown: false,
      }}>
      <Stack.Screen
        name="Albums"
        component={Albums}
        options={{title: 'Albums'}}
      />
      <Stack.Screen
        name="Photos"
        component={Photos}
        options={{title: 'Photos'}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <materialTab.Navigator barStyle={{backgroundColor: '#6a5acd'}}>
        {/*  <materialTab.Screen name="Users " component={UsersStack} /> */}
        <materialTab.Screen name="Posts" component={PostsStack} />
        <materialTab.Screen
          name="Albums"
          component={AlbumsStack}
          /* options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="city" color={'#fdfdfd'} size={20} />
            ),
          }} */
        />
        <materialTab.Screen
          name="Todos"
          component={Todos}
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
