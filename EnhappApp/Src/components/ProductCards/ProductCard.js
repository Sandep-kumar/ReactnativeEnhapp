import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Card} from '@rneui/themed';

const ProductCard = props => {
  return (
    <View style={{width: '100%'}}>
      <Card
        containerStyle={{
          elevation: 0,
          borderColor: 'white',
          margin: 0,
          padding: 0,
          paddingBottom: 12,
        }}>
        <Card.Image
          style={{
            padding: 0,
            width: '100%',
            borderRadius: 10,
            marginBottom: 5,
          }}
          source={{
            uri: `${props.src}`,
          }}
        />

        <Text
          style={{fontSize: 15, flex: 1, fontWeight: '600', paddingLeft: 10}}>
          {props.title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            flex: 1,
            fontWeight: '600',
            color: 'gray',
            paddingLeft: 10,
          }}>
            
          {props.label}
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
});
export default ProductCard;
