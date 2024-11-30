import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        LOGIN <Text style={styles.subtitle}>/ Loja Varejo</Text>
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#bbb"
        textAlign="center" // Centraliza o texto do placeholder
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#bbb"
        secureTextEntry
        textAlign="center" // Centraliza o texto do placeholder
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10, // Menor distância entre o título e o primeiro input
    alignSelf: "flex-start", // Alinha o título à esquerda (início da tela)
    marginLeft: 30, // Mover o título um pouco para a direita (aumente o valor se necessário)
  },
  subtitle: {
    color: "#888",
    fontSize: 16,
    fontWeight: "normal",
  },
  input: {
    color: "#fff",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    marginBottom: 20, // Distância entre os inputs
    width: "80%", // Ajusta a largura para 80% da tela
  },
  button: {
    backgroundColor: "#007bff",
    height: 40,
    width: 120,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 40, // Distância maior entre o botão e os inputs
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default LoginScreen;















