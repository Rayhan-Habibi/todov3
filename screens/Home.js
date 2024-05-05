import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useFonts } from "expo-font"
import { StyleSheet } from 'react-native';
import { FAB, useTheme, Portal, Modal} from 'react-native-paper';
import Modals from './Modals';
import TaskList from './TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { modalStatus } from '../Data/optionsSlice';




function Home() {

    const theme = useTheme()
    const dispatch = useDispatch()

    const modals = useSelector((state) => state.configure.modalVisible)

    const [fontLoaded, fontError] = useFonts({
        "Nunito" : require("../assets/fonts/Nunito.ttf")
      });

    function showModal() {
        dispatch(modalStatus())
    }
    function hideModal() {
        dispatch(modalStatus())
    }

  return (
        <View style={style.viewStyle}>
            <ScrollView>
                <Text style={style.greetingsFont}>Today tasks</Text>
                <TaskList />
            </ScrollView>
            <Portal>
                <Modal visible={modals} onDismiss={hideModal} contentContainerStyle={style.modalStyle}>
                    <Modals />
                </Modal>
            </Portal>
            
            <FAB 
                icon="plus"
                label='New Task'
                size='small'
                rippleColor={theme.colors.primary}
                style={style.fab}
                onPress={showModal}
            />
        </View>
  )
}

const style = StyleSheet.create({
    greetingsFont: {
        fontFamily: "Nunito", 
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
    },
    viewStyle: {
        marginHorizontal: 10,
        marginBottom: 15,
        marginTop: 15, 
        padding: 12, 
        flex: 1
    },
    fab: {
        bottom: 30,
        right: 8,
        position: "absolute"
    },
    modalStyle: {
        padding: 20,
        backgroundColor: '#ffffff',
        margin: 30,
        borderRadius: 15
    }

})

export default Home
