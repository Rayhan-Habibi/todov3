import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Modal, PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import {useFonts} from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from 'react';
import { useTheme } from 'react-native-paper';


const Stack = createNativeStackNavigator()

export default function App() {

  const [fontLoaded, fontError] = useFonts({
    "Nunito" : require("./assets/fonts/Nunito.ttf")
  });

  const theme = useTheme();

  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{
            title: "TODO V3",
            contentStyle: {backgroundColor: "#fff"},
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTitleStyle: {fontSize: 25, fontFamily: "Nunito"},
            }}/>
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 's',
  },
});
