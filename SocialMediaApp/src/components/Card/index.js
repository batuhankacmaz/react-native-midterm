import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Card.style';
const NewsCard = ({cardData, navigation, navigatePage}) => {
  console.log('items', cardData);
  function navigateToPage() {
    navigation.navigate(navigatePage, cardData);
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
