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
import {useFetchUsers, useFetchUser} from '../../hooks/fetchData';
import Card from '../../components/Card';

const Users = props => {
  const {usersData, usersError, usersLoading} = useFetchUsers();
  console.log('usersData', usersData);
  //const {userData, userError, userLoading} = useFetchUser(1);
  //console.log('userData', userData);

  const renderUsersCard = ({item}) => (
    <Card
      cardData={item}
      navigation={props.navigation}
      navigatePage="UserDetail"
    />
  );
  const usersKeyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={usersKeyExtractor}
        data={usersData}
        renderItem={renderUsersCard}
      />
    </SafeAreaView>
  );
};

export default Users;
