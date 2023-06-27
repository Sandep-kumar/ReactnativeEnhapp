import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";

export default function HomeComp({Value,subValue}) {
  return (
    <View style={styles.header}>
      <View style={styles.box}>
        <View style={styles.icon}>
          <Avatar
            size={32}
            rounded
            icon={{ name: "pencil", type: "font-awesome" }}
            containerStyle={{ backgroundColor: "skyblue" }}
          />
        </View>
        <View style={styles.inner}>
          <Text style={styles.textMain}>{Value}</Text>
        </View>
        <View style={styles.innerSecond}>
          <Text style={styles.textSecondary}> {subValue}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    // border: "1px solid red", //border color red
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    marginTop: "5%",

    backgroundColor: "white",
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  icon: { width: "15%" },
  inner: {
    width: "34%",

    margin: "auto",
  },
  innerSecond: {
    width: "50%",
    textAlign: "right",
    margin: "auto",
    // backgroundColor: 'grey',
    // borderWidth: 1,
    justifyContent:"center"
    
  },
  textMain: {
    fontSize: 18,
  },
  textSecondary: {
    fontSize: 12,
    textAlign:"right",
   
  },
});
