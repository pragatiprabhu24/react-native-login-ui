import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
const { width, height } = Dimensions.get("window");

const MainBanner = ({ isLogin }) => {
  const bannerMarginTop = isLogin ? 10 : 110;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.inner}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../assets/logo.png")}
        />
        <Image
          style={[styles.banner, { marginTop: bannerMarginTop }]}
          resizeMode="contain"
          source={require("../assets/banner.png")}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBFF15",
  },
  inner: {
    flex: 1,
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
  },
});

export default MainBanner;
