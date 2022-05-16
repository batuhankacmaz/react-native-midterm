import React from 'react';
import {View, Text} from 'react-native';
import styles from './PostInformation.style';
import {useFetchUser} from '../../hooks/fetchData';

const PostInformationCard = ({postInformationData}) => {
  console.log('postInformationData', postInformationData);
  const {userData, userError, userLoading} = useFetchUser(
    postInformationData.userId,
  );
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textHeader}>Title</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{postInformationData.title}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.textHeader}>Author</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{userData.name}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.textHeader}>Body</Text>
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.text}>{postInformationData.body}</Text>
      </View>
    </View>
  );
};

export default PostInformationCard;
