import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import {useFetchPosts, useFetchPost} from '../../hooks/fetchData';
import PostCard from '../../components/PostCard';

const Posts = props => {
  const {postsData, postsError, postsLoading} = useFetchPosts();
  console.log('postsData', postsData);
  //const {postData, postError, postLoading} = useFetchPost(1);
  //console.log('postData', postData);
  const firstTwentyPost = postsData.filter(postData => {
    if (postData.id < 21) {
      return postData;
    }
  });

  const renderPostsCard = ({item}) => (
    <PostCard
      cardData={item}
      navigation={props.navigation}
      navigatePage="PostDetail"
    />
  );
  const postsKeyExtractor = (item, index) => item.id.toString();
  return (
    <SafeAreaView>
      <FlatList
        cardName="PostDetail"
        keyExtractor={postsKeyExtractor}
        data={firstTwentyPost}
        renderItem={renderPostsCard}
        initialNumToRender={20}
      />
    </SafeAreaView>
  );
};

export default Posts;

// I dont understand to question. if Only first 20 posts will be listed on page is only these listed
//I use firstTwentPost variable. But it means only first 20 renders then truth is use initialNumToRender method in Flatlist
