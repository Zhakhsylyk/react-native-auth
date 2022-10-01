import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";
import { getContent } from "../api/api";

const ItemList = () => {
  const [data, setData] = useState({
    users: [],
    posts: [],
    photos: [],
  });
  let contents;

  useEffect(() => {
    const promise = getContent();
    promise.then((response) => {
      setData({
        users: response[0].data,
        posts: response[1].data,
        photos: response[2].data,
      });
    });
  }, []);

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
        <Text style={styles["loader"]}>Loading...</Text>
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
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ItemList;
