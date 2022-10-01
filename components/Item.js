import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

const Item = ({ name, body, title, company, thumbnailUrl }) => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `${thumbnailUrl}` }}
        style={{ margin: 5, width: 60, height: 60 }}
      />
      <Text>Author : {name}</Text>
      <Text>Company : {company}</Text>
      <Text>Title : {body} </Text>
      <Text>Title : {title} </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 13,
    width: 160,
    height: 250,
    borderWidth: 3,
    borderColor: "#27569C",
    overflow: "scroll",
  },
});

export default Item;
