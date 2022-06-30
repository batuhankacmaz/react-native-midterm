import React, {useEffect, useState} from 'react';
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
  useFetchPhotos,
} from '../../hooks/fetchData';
import ImageCard from '../../components/ImageCard';
import axios from 'axios';

const Users = props => {
  const [filteredImageData, setFilteredImageData] = useState(null);
  const {usersData, usersError, usersLoading} = useFetchUsers();
  const dataId = props.route.params;
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`,
      );
      console.log('response', response);
      const filteredData = await response.data.filter(
        x => x.albumId === dataId,
      );
      console.log('filteredData', filteredData);
      setFilteredImageData(filteredData);
    };
    getData();
  }, [dataId]);
  const {photosData} = useFetchPhotos(dataId);
  console.log('photosData', photosData);
  console.log('photosData', dataId);

  const renderUsersCard = ({item}) => (
    <ImageCard cardName="Users" cardData={item} />
  );
  const usersKeyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView>
      <Text>Photos</Text>
      {filteredImageData && (
        <FlatList
          keyExtractor={usersKeyExtractor}
          data={filteredImageData}
          renderItem={renderUsersCard}
        />
      )}
    </SafeAreaView>
  );
};

export default Users;
