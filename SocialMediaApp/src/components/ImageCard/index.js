import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './ImageCard.style';
import {useFetchAlbums} from '../../hooks/fetchData';

const Card = props => {
  console.log('props', props.cardData);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.cardData.thumbnailUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.cardData.title}</Text>
      </View>
    </View>
  );
};

export default Card;
