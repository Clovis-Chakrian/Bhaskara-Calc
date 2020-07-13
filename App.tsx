import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);

  function handleCalcular() {
    setX1((-(b) + (((b ** 2 - 4 * a * c) ** 0.5))) / 2 * a);
    setX2((-(b) - (((b ** 2 - 4 * a * c) ** 0.5))) / 2 * a);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.title}>Calcule o resultado da equação:</Text>

      <View>
        <TextInput
          placeholderTextColor='#F40'
          placeholder='Digite o valor de a...'
          style={styles.inputABC}
          onChangeText={text => setA(Number(text))} />

        <TextInput
          placeholderTextColor='#F40'
          placeholder='Digite o valor de b...'
          style={styles.inputABC}
          onChangeText={text => setB(Number(text))} />

        <TextInput
          placeholderTextColor='#F40'
          placeholder='Digite o valor de c...'
          style={styles.inputABC}
          onChangeText={text => setC(Number(text))} />
      </View>

      <TouchableOpacity style={styles.calcButton}>
        <Text style={styles.buttonText} onPress={handleCalcular}>Calcular</Text>
      </TouchableOpacity>


      <Text style={styles.resultText}>X': {x1}</Text>
      <Text style={styles.resultText}>X": {x2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputABC: {
    color: '#F40',
    borderBottomColor: '#F40',
    borderBottomWidth: 1,
    width: 200,
    marginBottom: 20
  },

  calcButton: {
    width: 100,
    height: 50,
    backgroundColor: '#F40',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 25
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  },

  title: {
    color: '#F40',
    marginBottom: 100,
    fontSize: 18
  },

  resultText: {
    color: '#F40',
    fontSize: 18,
  }
});
