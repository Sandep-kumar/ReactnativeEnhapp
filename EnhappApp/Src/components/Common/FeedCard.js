import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Card, Icon} from '@rneui/themed';

import {CheckCircleIcon, Center, HStack, NativeBaseProvider} from 'native-base';
// import {MaterialIcons} from 'react-native-vector-icons';


import FeedHead from './FeedHead';

const Comment = () => {
  return (
    <HStack alignItems="center" space={4} justifyContent="space-between">
      <HStack alignItems="center">
        {/* <Icon as={<MaterialIcons name="access-time" />} color="#808080" /> */}
        <Icon name="rocket" size={30} color="#900" />
      </HStack>
      <HStack alignItems="center">
        <Text ml={1} color="#808080" fontWeight="500">
          <CheckCircleIcon size={2} />
          269 Highfive
        </Text>
      </HStack>
      <HStack alignItems="center">
        <Text ml={1} color="#808080" fontWeight="500">
          <CheckCircleIcon size={2} />9 comments
        </Text>
      </HStack>
    </HStack>
  );
};

export default function FeedCard({src}) {
  return (
    <View style={styles.box}>
      <Card containerStyle={{marginTop: 10, borderRadius: 15}}>
        <View style={{marginBottom: 20}}>
          <FeedHead Value="Jack" SecondaryValue="image posted on 31 mar" />
        </View>

        <Card.Divider />

        <Card.Title style={{textAlign: 'left', fontSize: 20}}>
          Revive Health Package
        </Card.Title>
        <Text style={styles.fonts} h1>
          A trusted approach to losing weight and a healthy lifestyle.
          Understanding the basics.
        </Text>
        <Card.Image
          style={{padding: 0, borderRadius: 15, marginBottom: 15}}
          source={{
            uri: `${src}`,
          }}
        />

        <Card.Divider />

        <NativeBaseProvider>
          <Center flex={1} px="3">
            <Comment />
          </Center>
        </NativeBaseProvider>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '100%',
    paddingBottom: 10,
  },

  fonts: {
    marginBottom: 8,
  },

  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
