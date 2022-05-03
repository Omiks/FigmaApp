import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

interface Props {
  children: any
}

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
    </TouchableWithoutFeedback>
); 

export default function App() {
  const [name, setName] = useState('some dump fucking name')
  const [age, setAge] =useState('69?');
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1'},
    { name: 'yoshi', key: '2'},
    { name: 'mario', key: '3'},
    { name: 'luigi', key: '4'},
    { name: 'peach', key: '5'},
    { name: 'toad', key: '6'},
    { name: 'bowser', key: '7'}
  ]);

  const pressHandler = (key: string) => {
    console.log(key);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key != key);
    })
  }

  return (
    <DismissKeyboard>
      <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Enter name:</Text>
        <TextInput style={styles.input}
        placeholder='put ur fucking name'
        onChangeText={(val) => setName(val)}/>
        <Text>Enter age:</Text>
        <TextInput style={styles.input}
        keyboardType='number-pad'
        placeholder='u are old...'
        onChangeText={(val) => setAge(val)}/>
      </View>
      <View style={styles.resolt}>
      <Text style={styles.textR}>name: {name}, age: {age}</Text>
      </View>

      { people.map(item =>(
          <View key={item.key}>
            <TouchableOpacity style={styles.touchableThing} onPress={() => pressHandler(item.key)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )
)}
    </View>
    </ScrollView>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'pink',
    padding:20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding:8,
    margin:10,
    width:'auto'
  },
  resolt: {
    marginTop: 10,
    width:300,
    height:100,
    paddingTop: 50,
    backgroundColor: 'beige',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30
  },
  textR: {
    fontWeight: 'bold'
  },
  touchableThing: {
    margin:50,
    borderRadius: 10,  
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#cae7c2',
    overflow: 'hidden',
  }
});
