import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import MainBanner from "../components/MainBanner";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleEmailLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <MainBanner isLogin={false} />
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Log in</Text>
        <View style={styles.loginButtons}>
          <TouchableOpacity style={styles.button} onPress={handleEmailLogin}>
            <Text style={styles.buttonText}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonn}>
            <Image
              style={styles.googleIcon}
              source={require("../assets/google.jpg")}
            />
            <Text style={styles.buttonText}>Log in with Google</Text>
          </TouchableOpacity>

          <Text style={styles.signupText}>
            Don't have an account yet?{" "}
            <Text style={styles.signupLink}>Sign up</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBFF15",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 0,
  },
  logo: {
    width: width * 0.8,
    marginTop: 100,
  },
  banner: {
    width: "100%",
    marginTop: 110,
  },
  loginContainer: {
    backgroundColor: "#003A37",
    justifyContent: "center",
    padding: 20,
    paddingTop: 20,
  },
  loginTitle: {
    color: "#00EAE4",
    fontSize: 20,
    marginBottom: 20,
  },
  loginButtons: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#DBFF15",
    width: "100%",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonn: {
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  signupText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
  signupLink: {
    color: "#00EAE4",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreen;
