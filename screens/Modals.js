import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useDispatch  } from 'react-redux'
import { addText } from '../Data/todoSlice'
import { nanoid } from '@reduxjs/toolkit'
import { modalStatus } from '../Data/optionsSlice'

function Modals() {

    const [enteredText, setEnteredText] = useState("")
    const dispatch = useDispatch()
   

  return (
    <View style={style.containerStyle}>
        <Text style={style.textStyle} >Create a new task</Text>
        <TextInput
            label="Add Task"
            mode='outlined'
            style={style.textInputStyle}
            onChangeText={(e) => setEnteredText(e)}
            value={enteredText}
        />
        <Button
            mode='contained'
            compact={true}
            disabled={enteredText ? false : true}
            style={{width: 70}}
            onPress={()=>{
                dispatch(addText({
                    id: nanoid(),
                    text: enteredText,
                    completed: false
                })),
                setEnteredText(""),
                dispatch(modalStatus())
            }}
        >
            Done
        </Button>
    </View>
  )
}

const style = StyleSheet.create({
    containerStyle: {
        justifyContent: "flex-end",
    },
    textStyle: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 20
    }, 
    textInputStyle: {
        marginBottom: 20
    }
})

export default Modals
