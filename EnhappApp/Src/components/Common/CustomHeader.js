import { View,Button, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { HStack } from "@react-native-material/core";

import {Ionicons} from "react-native-vector-icons"


const CustomHeader = ({navigation,title}) => {
  return (
    <View style={{backgroundColor:'#FFFFFF',
     width:"100%",
      height:"auto", margin:"auto", paddingBottom:3, paddingTop:3}}>
       
    <HStack>
      <TouchableOpacity
     onPress={() => navigation.openDrawer()}
       >
        <Ionicons style={{ height:"auto" , paddingLeft:12}} name={"menu"} size={20} color={"black"} />
      </TouchableOpacity>
      <Text style={{fontSize:18, paddingLeft:12,color: "rgb(28, 28, 30)",fontWeight:"500", margin:"auto"}}>{title}</Text>
    </HStack>
  </View>
  )
}

export default CustomHeader