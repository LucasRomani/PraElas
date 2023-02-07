import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Animatable.Image
          animation="flipInY"
          delay={100}
          source={require("../../assets/paraElas.png")}
          style={{
            width: "100%",
            borderRadius: 200,
            height: 300,
            width: 300,
          }}
          resizeMode="contain"
        />
      </View>
      <Animatable.View animation="fadeInUp" delay={1000} style={styles.form}>
        <Text
          style={styles.text}
          style={{
            padding: 10,
            fontSize: 25,
          }}
        >
          Faça o login para começar
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C99191",
  },
  logo: {
    flex: 4,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    backgroundColor: "#C99191",
    borderRadius: 50,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
});
