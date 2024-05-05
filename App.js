import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import {useFonts} from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from 'react';
import { useTheme } from 'react-native-paper';
import Habits from './screens/Habits';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faListCheck, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import store from './Data/store';
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()

function Navigator(){
  const theme = useTheme();

  return(
    <Tab.Navigator
      backBehavior='order'
      activeColor={theme.colors.primary}
      barStyle={{backgroundColor: '#f0f0f5'}}
      screenOptions={{}}
      shifting={true}
    >
      <Tab.Screen name='Tasks' component={Home} options={
        {tabBarIcon: ({color}) => (
          <FontAwesomeIcon icon={faListCheck} size={24} color={color}/>
        ),
        }
      }/>
      <Tab.Screen name='Habits' component={Habits} options={{
        tabBarIcon: ({color}) => (
          <FontAwesomeIcon icon={faRepeat} size={24} color={color}/>
        )
      }}/>
    </Tab.Navigator>
  )
}

export default function App() {

  const [fontLoaded, fontError] = useFonts({
    "Nunito" : require("./assets/fonts/Nunito.ttf")
  });

  const theme = useTheme();

  return (
    <GluestackUIProvider config={config} >
      <Provider store={store}>
        <NavigationContainer>
          <PaperProvider>
              <Stack.Navigator>
                <Stack.Screen name='Home' component={Navigator} options={{
                  title: "TODO V3",
                  contentStyle: {backgroundColor: "#FFFFF"},
                  headerTitleAlign: "center",
                  headerShadowVisible: false,
                  navigationBarColor: "#F0F0F5",
                  headerTitleStyle: {fontSize: 25, fontFamily: "Nunito"},
                  }}/>
              </Stack.Navigator>
          </PaperProvider>
        </NavigationContainer>
      </Provider>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
