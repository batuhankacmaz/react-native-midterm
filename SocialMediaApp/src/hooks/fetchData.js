import {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

export const useFetchUsers = () => {
  const [usersData, setUsersData] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);
  const [usersError, setUsersError] = useState(null);
  async function fetchUsersData() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`,
      );
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
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );
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
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
        );
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
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
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

export const useFetchComments = id => {
  const [commentsData, setCommentsData] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [commentsError, setCommentsError] = useState(null);

  useEffect(() => {
    async function fetchPostComments() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        );
        const data = response.data;
        setCommentsData(data);
        setCommentsLoading(false);
      } catch (e) {
        setCommentsError(e.message);
        setCommentsLoading(false);
      }
    }
    fetchPostComments();
  }, [id]);

  return {commentsData, commentsError, commentsLoading};
};

export const useFetchPhotos = id => {
  console.log('geldikk');
  const [photosData, setPhotosData] = useState([]);
  const [photosLoading, setPhotosLoading] = useState(true);
  const [photosError, setPhotosError] = useState(null);

  useEffect(() => {
    async function fetchPhotosData() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos`,
        );
        const data = response.data;
        const filterData = data.filter(item => item.albumId === id);
        console.log('data', data);
        setPhotosData(filterData);
        setPhotosLoading(false);
      } catch (e) {
        setPhotosError(e.message);
        setPhotosLoading(false);
      }
    }
    fetchPhotosData();
  }, [id]);

  return {photosData, photosError, photosLoading};
};

export const useFetchAlbums = () => {
  const [albumsData, setAlbumsData] = useState([]);
  const [albumsLoading, setAlbumsLoading] = useState(true);
  const [albumsError, setAlbumsError] = useState(null);

  useEffect(() => {
    async function fetchAlbumsData() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/albums`,
        );
        const data = response.data;
        setAlbumsData(data);
        setAlbumsLoading(false);
      } catch (e) {
        setAlbumsError(e.message);
        setAlbumsLoading(false);
      }
    }
    fetchAlbumsData();
  }, []);

  return {albumsData, albumsError, albumsLoading};
};

export const useFetchTodos = () => {
  const [todosData, setTodosData] = useState([]);
  const [todosLoading, setTodosLoading] = useState(true);
  const [todosError, setTodosError] = useState(null);

  useEffect(() => {
    async function fetchTodosData() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos`,
        );
        const data = response.data;
        setTodosData(data);
        setTodosLoading(false);
      } catch (e) {
        setTodosError(e.message);
        setTodosLoading(false);
      }
    }
    fetchTodosData();
  }, []);

  return {todosData, todosError, todosLoading};
};
