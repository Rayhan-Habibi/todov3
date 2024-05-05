import React, { useRef } from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { status } from '../Data/todoSlice'
import CheckBox from 'react-native-check-box'

function TaskList() {

  
  const taskList = useSelector(state => state.todo)
  const dispatch = useDispatch()
  const viewRef = useRef()
  

  return (
    <View style={style.container}>
            {
              taskList.map(tasks => 
                {
                    return (
                      <View style={style.todoStyle} ref={viewRef}>
                        <CheckBox
                          id={tasks.id}
                          rightTextStyle={
                            tasks.completed ? {textDecorationLine: "line-through"} : ""
                          }
                          onClick={()=>{
                            dispatch(status({
                              id: tasks.id
                            }))
                          }}
                          rightText={tasks.text}
                          isChecked={tasks.completed}
                          checkBoxColor="#663399"
                        />
                      </View>
                    )
                  }
                )
            }
    </View>
  )
}

const style = StyleSheet.create({
    container: {
       margin: 10
    },
    todoStyle: {
      marginTop: 10
    },
    checkStyle: {
      
    }
})

export default TaskList
