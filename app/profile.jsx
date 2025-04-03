import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Usuário Exemplo</Text>
        <Text style={styles.email}>usuario@exemplo.com</Text>
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
  profileHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
    backgroundColor: '#fff',
    width: '100%',
    height: 200,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
