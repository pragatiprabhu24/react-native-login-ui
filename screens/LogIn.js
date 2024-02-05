import React, { useState } from "react";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  const btnTextColor = isFilled ? "black" : "white";

  const handleEmailChange = (text) => {
    setEmail(text);
    checkFilled();
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    checkFilled();
  };

  const checkFilled = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <MainBanner isLogin={true} />
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Log in</Text>
        <View>
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="johnhandmade@gmail.com"
            placeholderTextColor="#C9D7DD"
            onChangeText={handleEmailChange}
          />
        </View>
        <View>
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Not 'password'"
            placeholderTextColor="#C9D7DD"
            onChangeText={handlePasswordChange}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isFilled ? "#DBFF15" : "#BBC0C8" },
          ]}
          disabled={!isFilled}
        >
          <Text style={[styles.buttonText, { color: btnTextColor }]}>
            {isFilled ? "Let's Go" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
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
  inputText: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    width: "100%",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Login;
