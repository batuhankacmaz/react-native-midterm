import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  View,
} from 'react-native';
import {
  useFetchUsers,
  useFetchUser,
  useFetchTodos,
} from '../../hooks/fetchData';
import Card from '../../components/Card';

const Users = props => {
  const {usersData, usersError, usersLoading} = useFetchUsers();
  const {todosData, todosError, todosLoading} = useFetchTodos();

  //const {userData, userError, userLoading} = useFetchUser(1);
  //console.log('userData', userData);

  const renderUsersCard = ({item}) => (
    <Card cardName="Users" cardData={item} isTodo />
  );
  const usersKeyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView>
      <Text>Todos</Text>
      <FlatList
        keyExtractor={usersKeyExtractor}
        data={todosData}
        renderItem={renderUsersCard}
      />
    </SafeAreaView>
  );
};

export default Users;
