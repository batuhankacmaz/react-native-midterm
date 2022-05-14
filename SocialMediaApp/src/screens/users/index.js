import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useFetchUsers, useFetchUser} from '../../hooks/fetchData';

const Users = () => {
  const {usersData, usersError, usersLoading} = useFetchUsers();
  console.log('usersData', usersData);
  const {userData, userError, userLoading} = useFetchUser(1);
  console.log('userData', userData);
  return (
    <SafeAreaView>
      <Text>Users</Text>
    </SafeAreaView>
  );
};

export default Users;
