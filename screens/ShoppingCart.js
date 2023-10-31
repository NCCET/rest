import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

const ShoppingCart = ({route}) => {
  const {items} = route.params
 console.log('items.image')

  return (
    <View style={{ padding: 16 }}>

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
      {items.name}
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 16 }}>{items.price}</Text>
      <View style={{width: 80, height: 80 , backgroundColor: 'orange'}}>
        <Image
              style={{width: 40, height: 40 ,}}
               source={items.image}
               />
      </View>
    </View>
  );
};

export default ShoppingCart;
