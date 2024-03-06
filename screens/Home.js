import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import {useFonts} from "expo-font"
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

function Home() {

    const theme = useTheme()

    const [fontLoaded, fontError] = useFonts({
        "Nunito" : require("../assets/fonts/Nunito.ttf")
      });

  return (
        <View style={{marginHorizontal: 20, marginBottom: 15, marginTop: 15, padding: 12, flex: 1}}>
            <ScrollView>
                <Text style={style.greetingsFont}>Hey</Text>
                <Text style={style.secondGreetingsText}>what's up Wei!</Text>
            </ScrollView>
            <FAB 
                icon="plus"
                label='New Task'
                size='small'
                rippleColor={theme.colors.secondary}
                background={{color: theme.colors.secondary}}
                style={style.fab}
            />
        </View>
  )
}

const style = StyleSheet.create({
    greetingsFont: {
        fontFamily: "Nunito", 
        fontSize: 35,
        fontWeight: "bold",
    },
    secondGreetingsText: {
        fontFamily: "Nunito",
        fontWeight: "bold",
        fontSize: 35,
    },
    fab: {
        bottom: 30,
        right: 8,
        position: "absolute"
    }

})

export default Home
