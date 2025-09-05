import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import api from "./src/devices/api";

export default function App() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await api.get("/users"); 
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
          <Text style={styles.text}>Nome: {item.name}</Text>
          <Text style={styles.text}>Email: {item.email}</Text>
        </View>
      );
    });
    return vet;
  };

}