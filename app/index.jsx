import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';


export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo à Home!</Text>
        <Text style={styles.subtitle}>Aqui você encontra informações iniciais.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  menuButton: {
    padding: 20,
    alignSelf: 'flex-start',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
