import {View, Text,StyleSheet,Image} from 'react-native';
import React from 'react';
import {Stack, HStack} from 'native-base';
import {Avatar} from '@rneui/themed';
import { ScrollView } from "native-base";

const ChatBox = ({UserName,lastText,UnRead,NoUnRead}) => {
  return (
    
    <>
      
      <Stack
        
        style={{
          width: '100%',
          height: 'auto',
          backgroundColor: '#FFFFFF',
          margin: 'auto',
          paddingTop: 5,
          paddingBottom: 5,
        }}>
        
        <HStack m={3} w={'100%'} >
          <View
            style={{
              width: '20%',
              height: 'auto',
              backgroundColor: '#FFFFFF',
              margin: 'auto',
              alignItems: 'center',
            }}>
             
              
            <Avatar
              size={60}
              rounded
              source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'} }
            />
          </View>
          <View
            style={{
              width: '55%',
              height: 'auto',
              margin: 'auto',
              backgroundColor: '#FFFFFF',
            }}>
            <Text style={{fontSize: 20, fontWeight: 400}}>
              {UserName}
            </Text>
            <Text style={{fontSize: 15, color: '#808080', fontWeight: 400}}>
              {lastText}
            </Text>
          </View>
          <View
            style={{
              width: '20%',
              height: 'auto',
              margin: 'auto',
              backgroundColor: '#FFFFFF',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                color: '#808080',
                marginBottom: 3,
                fontWeight: 400,
              }}>
              16:15
            </Text>
            <View>
              <View>
                <Avatar
                  size={UnRead == 'True' ? 27 : 0}
                  rounded
                  title={NoUnRead}
                  containerStyle={{backgroundColor: '#FFA500'}}
                />
              </View>
            </View>
          </View>
        </HStack>
      </Stack>
    </>
  );
};

export default ChatBox;
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    backgroundColor:"red"
  },
  logo: {
    width: 66,
    height: 58,
  },
});