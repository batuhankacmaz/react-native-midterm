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
import {useFetchUsers, useFetchComments} from '../../hooks/fetchData';
import Card from '../../components/Card';

const Users = props => {
  const {usersData, usersError, usersLoading} = useFetchUsers();
  const {commentsData} = useFetchComments(props.route.params.id);
  const data = props.route.params.id;
  console.log('comments', commentsData);
  //const {userData, userError, userLoading} = useFetchUser(1);
  //console.log('userData', userData);

  const renderUsersCard = ({item}) => (
    <Card
      cardName="Users"
      cardData={item}
      navigation={props.navigation}
      navigatePage="UserDetail"
    />
  );
  const usersKeyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView>
      <Text>Comments</Text>
      <FlatList
        keyExtractor={usersKeyExtractor}
        data={commentsData}
        renderItem={renderUsersCard}
      />
    </SafeAreaView>
  );
};

export default Users;
