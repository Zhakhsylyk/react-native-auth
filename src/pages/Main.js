import { View } from "react-native";
import React from "react";
import Header from "../components/Header";
import ItemList from "../components/ItemList";

const Main = ({ navigation }) => {
  return (
    <View>
      <Header nav={navigation} header={true} />
      <ItemList />
    </View>
  );
};

export default Main;
