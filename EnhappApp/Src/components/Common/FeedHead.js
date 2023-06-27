import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";
import { HStack } from "native-base";
import { Appbar } from 'react-native-paper';

export default function FeedHead(props) {
  const _handleMore = () => console.log('Shown more');
  return (
    <View style={styles.header}>
      <HStack style={styles.box}>
        <View style={styles.icon}>
          <Avatar
            size={50}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
        </View>
        <View style={styles.inner}>
          <Text style={styles.textMain}>{props.Value}</Text>
          <Text style={styles.textSecondary}>{props.SecondaryValue}</Text>
        </View>
        <View style={styles.innerSecond}>
        <Appbar.Action icon="dots-vertical" onPress={_handleMore}/>
        </View>
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
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
  icon: { width: "20%" },
  inner: {
    width: "60%",
    textAlign: "left",
    margin: "auto",
  },
  innerSecond: {
    
    textAlign: "right",
    margin: "auto",
  },
  textMain: {
    fontSize: 18,
    fontWeight: "500",
  },
  textSecondary: {
    fontSize: 14,
    fontWeight: "400",
    color: "gray",
  },
});
