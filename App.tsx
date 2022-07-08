import React, { useState } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Focus } from './focus/Focus';

export default function App() {
  const [focusSubject, setFocuseSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>I hava a subject</Text>
      ) : (
        <Focus addSubject={setFocuseSubject}/>
       )}
       <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#242240',
  },
});