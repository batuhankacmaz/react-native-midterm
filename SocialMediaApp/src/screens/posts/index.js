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

const Posts = () => {
  const {postsData, postsError, postsLoading} = useFetchPosts();
  console.log('postsData', postsData);
  const {postData, postError, postLoading} = useFetchPost(1);
  console.log('postData', postData);
  return (
    <SafeAreaView>
      <Text>Posts</Text>
    </SafeAreaView>
  );
};

export default Posts;
