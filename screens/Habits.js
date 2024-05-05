import React from 'react'
import { View, Text } from 'react-native'
import { Dialog, Button } from 'react-native-paper'

function Habits() {
  return (
    
      <Dialog visible={true}>
        <Dialog.Title>Hey You!</Dialog.Title>
        <Dialog.Content>
          <Text>Thanks for using my app. This app is stil in development process, so some features may not available until the next update</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={()=>{}}>Okay My lord</Button>
        </Dialog.Actions>
      </Dialog>
 
  )
}

export default Habits
