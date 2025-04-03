# Expo Router Drawer Navigation

A complete guide for implementing drawer navigation in Expo Router, based on the Stack navigation example.

![Expo Router Drawer](https://github.com/Eduardo1985S/expo-router-drawer/raw/main/preview.png)

## Getting Started

### Step 1: Project Setup

**Create a new Expo project** (if you don't have one already):

```bash
npx create-expo-app@latest my-app --template blank
cd my-app
```

**Install the necessary dependencies**:

```bash
npx expo install expo-router @react-navigation/drawer react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

**Configure the entry point** in `package.json`:

```json
"main": "expo-router/entry"
```

**Add URL scheme in `app.json`**:

```json
"expo": {
  "scheme": "myapp"
}
```

**Clear the bundler cache**:

```bash
npx expo start --clear
```

### Step 2: Project Structure

Create a folder called `app` in the project root.
Inside the `app` folder, create a subfolder called `(drawer)`, which will contain the drawer-related files.

### Step 3: Create Drawer Layout

create a file called `_layout.js`:

```javascript
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: 'Início',
            title: 'Página Inicial',
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Configurações',
            title: 'Configurações',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
```

### Step 4: Create Screens

File `index.js`:

```javascript
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Página Inicial!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
```

File `(drawer)/settings.jsx`:

```javascript
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
```

### Step 5: Run the App

Start the project:

```bash
npx expo start
```

Open the app in the emulator or scan the QR code with the Expo Go app.

## Result

Now your application will have a functional Drawer navigation with two options in the side menu (Home and Settings). You can customize the styles and add more screens as needed.

## Extra Tips

- To add icons to the menu, use libraries like `react-native-vector-icons`.
- Customize the header of each screen by adjusting options in `Drawer.Screen`.
- If you need combined navigation (Drawer + Stack), check this example.

## Important Note

To use Drawer navigation, you need to install the `@react-navigation/drawer` library, which is included in the dependencies listed above.

## Common Issues and Solutions

### Reanimated Configuration

If you're experiencing issues with Reanimated, make sure to add the following to your `babel.config.js`:

```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

### Gesture Handler Setup

For Android, you need to make sure the Gesture Handler is properly set up. The `GestureHandlerRootView` component in the layout file should take care of this, but if you're still experiencing issues, check the [official documentation](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation).

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
