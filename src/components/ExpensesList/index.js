import React from 'react';
import { View, FlatList, Text } from 'react-native';

import ExpenseCard from '../ExpenseCard';

import styles from './styles';

const data = [{
  id: '1',
  description: "item 1",
  price: "1.00",
  image: ""
},{
  id: '2',
  description: "item 2",
  price: "2.00",
  image: ""
},{
  id: '3',
  description: "item 3",
  price: "3.00",
  image: ""
}];

export default function ExpensesList() {
  return (
    <View style={styles.container}>
      <FlatList
        data= {[{
          id: '1',
          description: "item 1",
          price: "1.00",
          date: new Date(),
          image: ""
        },{
          id: '2',
          date: new Date(),
          description: "item 2",
          price: "2.00",
          image: ""
        },{
          id: '3',
          date: new Date(),
          description: "item 3",
          price: "3.00",
          image: ""
        },{
          id: '4',
          date: new Date(),
          description: "item 4",
          price: "3.00",
          image: ""
        }]}

        keyExtractor={ expense => expense.id}
        renderItem={({item}) => (<ExpenseCard {...item} />) }
      />
    </View>
  );
}
