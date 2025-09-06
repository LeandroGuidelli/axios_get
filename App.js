import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import api from "./src/devices/api";

export default function App() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await api.get("http://10.110.12.21:3000/users"); 
      setUsers(response.data);
    } catch (error) {
      console.error("Error GET:", error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const _render = () => {
    const vet = [];
    users.map((item, index) => {
      vet.push(
        <View key={index} style={styles.card}>
          <Text style={styles.text}>ID: {item.id}</Text>
          <Text style={styles.text}>Nome: {item.nome}</Text>
          <Text style={styles.text}>Email: {item.email}</Text>
        </View>
      );
    });
    return vet;
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>GET - Listar Usuários</Text>
      <View style={styles.button}>
        <Button title="Recarregar Lista" onPress={fetchUsers}/>
      </View>
      <ScrollView style={styles.scrollView}>
        {_render()}
      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    padding: 20,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Sombra no Android
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
  },
  button: {
    marginBottom: 15,
  },
  scrollView: {
    width: "100%",
  },
});
