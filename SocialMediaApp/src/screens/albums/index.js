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
import {useFetchUsers, useFetchAlbums} from '../../hooks/fetchData';
import AlbumsCard from '../../components/AlbumsCard';

const Users = props => {
  const {usersData, usersError, usersLoading} = useFetchUsers();
  const {albumsData} = useFetchAlbums();
  //const {userData, userError, userLoading} = useFetchUser(1);
  console.log('albumsData', albumsData);

  const renderUsersCard = ({item}) => (
    <AlbumsCard
      cardName="Albums"
      cardData={item}
      navigation={props.navigation}
      navigatePage="Photos"
    />
  );
  const usersKeyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView>
      <Text>Albums</Text>
      <FlatList
        keyExtractor={usersKeyExtractor}
        data={albumsData}
        renderItem={renderUsersCard}
      />
    </SafeAreaView>
  );
};

export default Users;
