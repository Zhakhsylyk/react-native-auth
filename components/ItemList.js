import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import axios from "axios";
import * as API from "../api/api";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let endpoints = [
  `${BASE_URL}/users`,
  `${BASE_URL}/posts`,
  `${BASE_URL}/photos`,
];

const ItemList = () => {
  const [data, setData] = useState({
    users: [],
    posts: [],
    photos: [],
  });
  let contents;

  useEffect(() => {
    getContent();
  }, []);

  const getContent = () => {
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      axios.spread((...response) => {
        setData({
          users: response[0].data,
          posts: response[1].data,
          photos: response[2].data,
        });
      })
    );
  };

  if (data) {
    contents = data.posts.map((post) => ({
      ...post,
      ...data.users.find((user) => post.userId === user.id),
      ...data.photos.find((photo) => photo.albumId === post.userId),
    }));
    contents = contents.filter(
      (content, index, self) =>
        index === self.findIndex((item) => item.id === content.id)
    );
  }

  return (
    <ScrollView>
      {contents ? (
        <View style={styles.wrapper}>
          {contents.map((content) => (
            <Item
              key={content.id}
              name={content.name}
              company={content.company.name}
              title={content.title}
              body={content.body}
              thumbnailUrl={content.thumbnailUrl}
            />
          ))}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default ItemList;
