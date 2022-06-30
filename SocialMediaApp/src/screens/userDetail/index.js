import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import InformationCard from '../../components/InformatinCard';

function UserDetail({route, navigation}) {
  console.log('route', navigation);
  const data = route.params;

  function backToFirst() {
    navigation.goBack();
    console.log('clicked');
  }
  return (
    <SafeAreaView style={styles.container}>
      <InformationCard informationData={data} />
    </SafeAreaView>
  );
}

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#eceff1',
    margin: 0,
  },
});
