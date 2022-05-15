import React from 'react';
import {View, Text} from 'react-native';
import styles from './InformationCard';

const InformationCard = ({informationData}) => {
  console.log('informationData', informationData);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Full name:</Text>
        <Text style={styles.text}>{informationData.name}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Company:</Text>
        <Text style={styles.text}>{informationData.company.name}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Username:</Text>
        <Text style={styles.text}>{informationData.username}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Phone Number:</Text>
        <Text style={styles.text}>{informationData.phone}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Email:</Text>
        <Text style={styles.text}>{informationData.email}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Website:</Text>
        <Text style={styles.text}>{informationData.website}</Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.textHeader}>Address</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>City:</Text>
          <Text style={styles.text}> {informationData.address.city}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Street:</Text>
          <Text style={styles.text}> {informationData.address.street}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Suite:</Text>
          <Text style={styles.text}> {informationData.address.suite}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Zipcode:</Text>
          <Text style={styles.text}>{informationData.website}</Text>
        </View>
      </View>
    </View>
  );
};

export default InformationCard;
