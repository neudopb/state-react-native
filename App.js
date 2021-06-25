import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  function aumentar() {
    setCount(count+1)
  }

  function diminuir() {
    setCount(count-1)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtCont}>Contador de Pessoas</Text>
      </View>
      <View style={styles.boxVal}>
        <Text style={styles.txtVal}>{count}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={aumentar}>
          <Text style={styles.txtBtn}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={diminuir}>
          <Text style={styles.txtBtn}>-</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636aba', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCont: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    margin: 25,
    marginTop: -30,
  },
  boxVal: {
    width: 180,
    height: 100,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 25,
  },
  txtVal: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  btn: {
    width: 210,
    height: 85,
    borderRadius: 10,
    backgroundColor: '#362861',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
  txtBtn: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});
