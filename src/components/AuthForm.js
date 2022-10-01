import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { logIn } from "../../firebase-config";
import { verifyPasswordResetCode } from "firebase/auth";

const AuthForm = ({ nav }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogIn = async () => {
    const res = await logIn(login, password);
    if (res.error) {
      setError(res.error);
    } else {
      nav.navigate("Main");
      setLogin("");
      setPassword("");
      setError("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles["form"]}>
        <Text style={styles["form__text"]}>Authorization</Text>
        <View style={styles["form__section"]}>
          <View style={styles["form__section_item"]}>
            <Text>login</Text>
            <TextInput
              style={
                error
                  ? styles["form__section_input-invalid"]
                  : styles["form__section_input"]
              }
              placeholder="Введите логин"
              placeholderTextColor="#A9ACB6"
              value={login}
              onChangeText={(text) => setLogin(text)}
            />
          </View>
          <View style={styles["form__section_item"]}>
            <Text>password</Text>
            <TextInput
              style={
                error
                  ? styles["form__section_input-invalid"]
                  : styles["form__section_input"]
              }
              secureTextEntry={true}
              placeholder="Введите пароль"
              placeholderTextColor="#A9ACB6"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <TouchableOpacity style={styles["form__button"]} onPress={handleLogIn}>
          <Text style={styles["form__buttonText"]}>Submit</Text>
        </TouchableOpacity>
      </View>
      {error ? <Text style={styles["form__error"]}>{error}</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#27569C",
    borderRadius: 3,
    width: 300,
    height: 200,
    bottom: 40,
  },
  form__text: {
    color: "#27569C",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    paddingBottom: 10,
  },
  form__section: {
    display: "flex",
    gap: 10,
  },
  form__section_item: {
    display: "flex",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  form__section_input: {
    backgroundColor: "#D9D9D9",
    borderWidth: 3,
    borderColor: "#27569C",
    padding: 5,
    marginLeft: "auto",
    width: 180,
    borderRadius: 10,
  },
  "form__section_input-invalid": {
    backgroundColor: "#D9D9D9",
    borderWidth: 3,
    borderColor: "red",
    padding: 5,
    marginLeft: "auto",
    width: 180,
    borderRadius: 10,
  },
  form__button: {
    justifyContent: "center",
    alignItems: "center",
    width: 140,
    height: 30,
    marginTop: 20,
    cursor: "pointer",
    backgroundColor: "#E4B062",
    color: "#E4B062",
    borderRadius: 5,
  },
  form__buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  form__error: {
    color: "red",
    fontSize: 12,
    fontWeight: "700",
  },
});

export default AuthForm;
