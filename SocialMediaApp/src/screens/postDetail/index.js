import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useFetchPosts, useFetchPost} from '../../hooks/fetchData';
import PostInformatinCard from '../../components/PostInformationCard';

const PostDetail = ({route, navigation}) => {
  const data = route.params;

  function backToFirst() {
    navigation.goBack();
  }
  const {postsData, postsError, postsLoading} = useFetchPosts();

  const {postData, postError, postLoading} = useFetchPost(1);
  console.log('postData', postData);
  return (
    <SafeAreaView style={styles.container}>
      <PostInformatinCard postInformationData={data} />
    </SafeAreaView>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#eceff1',
    margin: 0,
  },
});
