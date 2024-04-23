import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function Login() {
  return (
    <View>
      <Text>Login</Text>
      <View style={styles.subContainer}>
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 27,
            textAlign: "center",
          }}
        >
          Let's Find
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {" "}
            Professional Cleaneing and repair
          </Text>{" "}
          Services
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: Colors.WHITE,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Best App to find services for your home and office
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("Button Pressed");
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: Colors.PRIMARY,
            }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    with: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 40,
  },
});
