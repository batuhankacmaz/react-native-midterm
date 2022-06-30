import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './AlbumsCard.style';
import {useFetchAlbums} from '../../hooks/fetchData';

const Card = ({cardData, isTodo, cardName, navigation, navigatePage}) => {
  const {albumsData, userError, userLoading} = useFetchAlbums();

  function navigateToPage() {
    navigation.navigate(navigatePage, cardData.id);
  }

  return (
    <View>
      <TouchableOpacity style={styles.containerFree} onPress={navigateToPage}>
        <Text style={styles.text}>{cardData.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
