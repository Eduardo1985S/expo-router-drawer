import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Início',
          title: 'Home',
          headerShown: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: 'Perfil',
          title: 'Perfil',
          headerShown: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}