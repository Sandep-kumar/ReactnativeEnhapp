import { View, Text } from "react-native";
import React from "react";
import Search from "./SearchBox/Search";
import ChatBox from "../../components/Chat/ChatBox";
import {styles} from '../../StylePage'

const Chat = () => {
  return (
    <View>
      <View style={styles.bg_white}>
        <Search />
      </View>

      <View style={styles.marginBottom}>
        <ChatBox
          UnRead="True"
          NoUnRead="3"
          UserName="Janet Fowler"
          lastText="I'm going to San Francisco …"
        />
      </View>
     
      <View style={styles.marginBottom}>
        <ChatBox
         UnRead="False"
          NoUnRead="3"
          UserName="Sandeep Fowler"
          lastText="I'm going to San Francisco …"
        />
      </View>
     
      <View style={styles.marginBottom}>
        <ChatBox
          UnRead="False" 
          NoUnRead="3"
          UserName="Janet Fowler"
          lastText="I'm going to San Francisco …"
        />
      </View>
      <View style={styles.marginBottom}>
        <ChatBox
          UnRead="False" 
          NoUnRead="3"
          UserName="Janet Fowler"
          lastText="I'm going to San Francisco …"
        />
      </View>
      <View style={styles.marginBottom}>
        <ChatBox
          UnRead="False" 
          NoUnRead="3"
          UserName="Janet Fowler"
          lastText="I'm going to San Francisco …"
        />
      </View>
      <View style={styles.marginBottom}>
        <ChatBox
          UnRead="False" 
          NoUnRead="3"
          UserName="Janet Fowler"
          lastText="I'm going to San Francisco …"
        />
      </View>
      <View style={styles.marginBottom}>
        <ChatBox
          UnRead="False" 
          NoUnRead="3"
          UserName="Janet Fowler"
          lastText="I'm going to San Francisco …"
        />
      </View>
     
     
     
     
      
    </View>
  );
};

export default Chat;
