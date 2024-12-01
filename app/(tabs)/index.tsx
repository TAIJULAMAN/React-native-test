import { Text, View, Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.tab1}>
        <Image
          source={require("../../assets/images/react-logo.png")}
          style={styles.reactLogo}
        />
        <View style={styles.text}>
          <Text
            style={{
              color: "black",
              fontWeight: "900",
              fontSize: 20,
            }}
          >
            Md Shah Aman Patwary
          </Text>
          <Text
            style={{
              color: "#13e8e4",
            }}
          >
            @octocat
          </Text>
          <Text
            style={{
              color: "#bdc3c7",
              fontSize: 16,
              marginTop: 5,
            }}
          >
            Joined 25 jan 2011
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  tab1: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  reactLogo: {
    height: 90,
    width: 90,
  },
  text: {
    marginLeft: 20,
  },
});
