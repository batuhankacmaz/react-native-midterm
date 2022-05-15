import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Card.style';
import {useFetchUser} from '../../hooks/fetchData';

const NewsCard = ({cardData, navigation, navigatePage}) => {
  console.log('items', cardData);
  const {userData, userError, userLoading} = useFetchUser(cardData.id);
  console.log('userData', userData);
  function navigateToPage() {
    navigation.navigate(navigatePage, userData);
  }

  return (
    <View>
      <TouchableOpacity style={styles.containerFree} onPress={navigateToPage}>
        <Text style={styles.text}>{cardData.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewsCard;
