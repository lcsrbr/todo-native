import React, { useState } from 'react';
import {
  TextInput, StyleSheet, ScrollView,
  Button,
  View,
  Text,
  Linking,
} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = useState('');
  const [list, onChangeList] = useState([])


  const removeToList = (param) => {
    const filtered = list.filter((item) => item !== param)
    onChangeList(filtered)
  }

  const addTextToList = () => {
    const newList = [text, ...list]
    onChangeList(newList)
    onChangeText('')
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <Text style={styles.title}> to do</Text>
        <Text style={styles.info}>Hi! This is my first project in React Native. Any questions or suggestions, my contacts are in the link at the end of the page :) </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="type here"
          keyboardType="text"
          enablesReturnKeyAutomatically={false}
        />
        <Button
          title="add to list"
          disabled={!text}
          onPress={() => addTextToList()}
        />
        <View style={styles.list}>
          {list.map((item, index) =>
            <View style={styles.block} key={index} >
              <Text style={styles.text}> {item} </Text>
              <Button
                title="remove"
                onPress={() => removeToList(item)}
              />
            </View>
          )
          }
        </View>

      </ScrollView>
        <Text  style={styles.footer} onPress={() => Linking.openURL('https://portfolio-lcsrbr.vercel.app/')}> Criado por Lucas Moura, 2023</Text>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5dc"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 70,
    textAlign: 1,
  },
  info: {
    textAlign: 1
  },
  text: {
    fontSize: 20,
  },
  block: {
    display: "flex",
    flexDirection: "row",
    textAlign: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#add8e6",
    margin: 10
  },
  footer: {
    position: "absolute",
    display:"flex",
    alignItems:"center",
    bottom: 0,
    right:1,
    left:1,
    textAlign: "center",
  }
});

export default TextInputExample;