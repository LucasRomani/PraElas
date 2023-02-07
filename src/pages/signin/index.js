import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Signin() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Text style={styles.message}>Bem vindo(a)</Text>
      </Animatable.View>
      <View style={styles.divForm}>
        <Animatable.View animation="fadeInUp" style={styles.form}>
          <Text style={styles.title}>E-mail</Text>
          <TextInput
            placeholder="Digite um e-mail..."
            keyboardType="email-address"
            style={styles.input}
          />
          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholder="Sua senha"
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonRegister}>
            <Text style={styles.registerButton}>
              Não possui uma conta? Cadastre-se
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C99191",
  },
  header: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  divForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    paddingTop: 25,
  },
  title: {
    fontSize: 20,
    marginTop: 15,
  },
  input: {
    borderBottomWidth: 1,
    height: 45,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#C99191",
    width: "100%",
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerButton: {
    color: "#a1a1a1",
  },
});
