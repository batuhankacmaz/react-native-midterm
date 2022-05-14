import {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

export const useFetchUsers = () => {
  const [usersData, setUsersData] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);
  const [usersError, setUsersError] = useState(null);
  async function fetchUsersData() {
    try {
      const response = await axios.get(`${Config.API_URL}/users`);
      const data = response.data;
      setUsersData(data);
      setUsersLoading(false);
    } catch (e) {
      setUsersError(e.message);
      setUsersLoading(false);
    }
  }
  useEffect(() => {
    fetchUsersData();
  }, []);

  return {usersData, usersError, usersLoading};
};

export const useFetchUser = id => {
  const [userData, setUserData] = useState([]);
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`${Config.API_URL}/users/${id}`);
        const data = response.data;
        setUserData(data);
        setUserLoading(false);
      } catch (e) {
        setUserError(e.message);
        setUserLoading(false);
      }
    }
    fetchUserData();
  }, [id]);

  return {userData, userError, userLoading};
};

export const useFetchPosts = () => {
  const [postsData, setPostsData] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);
  const [postsError, setPostsError] = useState(null);

  useEffect(() => {
    async function fetchPostsData() {
      try {
        const response = await axios.get(`${Config.API_URL}/posts`);
        const data = response.data;
        setPostsData(data);
        setPostsLoading(false);
      } catch (e) {
        setPostsError(e.message);
        setPostsLoading(false);
      }
    }
    fetchPostsData();
  }, []);

  return {postsData, postsError, postsLoading};
};

export const useFetchPost = id => {
  const [postData, setPostData] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [postError, setPostError] = useState(null);

  useEffect(() => {
    async function fetchPostData() {
      try {
        const response = await axios.get(`${Config.API_URL}/posts/${id}`);
        const data = response.data;
        setPostData(data);
        setPostLoading(false);
      } catch (e) {
        setPostError(e.message);
        setPostLoading(false);
      }
    }
    fetchPostData();
  }, [id]);

  return {postData, postError, postLoading};
};
