import { StyleSheet, View } from "react-native";
import AuthForm from "../components/AuthForm";
import Header from "../components/Header";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Header header={false} />
      <AuthForm nav={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
