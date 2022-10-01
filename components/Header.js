import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { logOut } from "../firebase-config";

const Header = ({ nav, header }) => {
  const handleLogOut = async () => {
    const res = await logOut();
    if (res) {
      nav.navigate("Login");
    }
  };
  return (
    <View style={styles.header}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 45,
          alignItems: "center",
        }}
      >
        <Image
          style={styles["header__logo"]}
          source={require("../assets/images/kanalservis-logo.png")}
        />
        <Text style={styles["header__title"]}>Каналcервис</Text>
        {header ? (
          <TouchableOpacity
            style={styles["header__wrapper"]}
            onPress={handleLogOut}
          >
            <Image
              style={styles["header__wrapper_logout-icon"]}
              source={require("../assets/images/logout-icon.png")}
            />
          </TouchableOpacity>
        ) : (
          ""
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: 15,
    gap: 10,
    marginTop: 0,
    backgroundColor: "#E4B062",
    color: "#27569C",
    height: 100,
    fontFamily: "MerriweatherSans-BoldItalic",
  },
  header__logo: {
    width: 45,
    height: 45,
  },
  header__title: {
    color: "#353c41",
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "700",
  },
  header__wrapper: {
    marginLeft: "auto",
    paddingRight: 10,
  },
  "header__wrapper_logout-icon": {
    width: 26,
    height: 25.82,
  },
});
export default Header;
