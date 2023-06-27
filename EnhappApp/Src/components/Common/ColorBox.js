import {View, Text} from 'react-native';
import React from 'react';


const ColorBox = ({Bcolor}) => {
  return (
    <View
      style={{
        borderColor: `${Bcolor}`,
        borderWidth: 2,
        borderRadius: 10,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:`${Bcolor}`
      }}>
      <Text style={{fontSize:20, fontWeight:900, color:"white"}}>40</Text>
      <Text style={{color:"white"}}>Calories</Text>
    </View>
  );
};

export default ColorBox;
