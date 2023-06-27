import { View, Text } from 'react-native'
import React from 'react'
import { HStack } from 'native-base'
import { Avatar } from '@rneui/themed';

const DetailCard = ({label,value,src}) => {
  return (
    <View style={{padding:10}}>
        
        <HStack>
            <View style={{
              width:"18%",
               alignItems:"center", margin:"auto"}}>
            <Avatar
            size={40}
            rounded
            source={{ uri: `${src}` }}
          />
            </View>
            <View style={{
              width:"82%",
               margin:"auto"}}>
                <Text style={{fontSize:10, fontWeight:"100", color:'#808080', height:20 }}>{label}</Text>
                <Text style={{fontSize:12, fontWeight:"400"}}>{value}</Text>
            </View>
        </HStack>
      
    </View>
  )
}

export default DetailCard