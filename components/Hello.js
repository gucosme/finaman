import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const Hello = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={{ textAlign: 'center' }}
        placeholder="Type here"
        onChangeText={setText}
      />
      <Text style={{ color: '#f00' }}>React!</Text>
      <Text>{text}</Text>
    </View>
  )
};

export default Hello;
