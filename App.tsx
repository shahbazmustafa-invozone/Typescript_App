import React from "react"
import {View,Text} from "react-native"
import Hello from "./src/Components/Hello";
const App =()=>{
  return(
    <View>
      <Text>
        shahbazs
      </Text>
      <Hello name="Shahbaz" enthusiasmLevel={10}/>
    </View>
  )
}
export default App;