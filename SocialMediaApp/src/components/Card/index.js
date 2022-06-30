import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Card.style';
import {useFetchUser} from '../../hooks/fetchData';

const Card = ({cardData, isTodo, cardName, navigation, navigatePage}) => {
  const {userData, userError, userLoading} = useFetchUser(cardData.id);

  function navigateToPage() {
    navigation.navigate(navigatePage, userData);
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.containerFree}
        onPress={navigateToPage}
        disabled={isTodo}>
        {isTodo ? (
          <Text style={styles.text}>{cardData.title}</Text>
        ) : (
          <Text style={styles.text}>{cardData.name}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Card;
