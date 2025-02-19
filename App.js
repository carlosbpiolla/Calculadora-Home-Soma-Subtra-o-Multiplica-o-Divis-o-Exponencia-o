import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Alert, Image } from 'react-native';
//import iconeCalculadora from './assets/icon_bmo.png';

export default function App() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular(operacao) {
    if (valor1 === '' || valor2 === '') {
      Alert.alert('Preencha os campos!');
      return;
    }
    let num1 = Number.parseFloat(valor1.replace(',', '.'));
    let num2 = Number.parseFloat(valor2.replace(',', '.'));
    let r;

    switch (operacao) {
      case '+':
        r = num1 + num2;
        break;
      case '-':
        r = num1 - num2;
        break;
      case '*':
        r = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          Alert.alert('Divisão por zero não é permitida!');
          return;
        }
        r = num1 / num2;
        break;
      case '^':
        r = Math.pow(num1, num2);
        break;
      default:
        return;
    }
    setResultado(r.toFixed(2));
    Keyboard.dismiss();
  }

  function limpar() {
    setValor1('');
    setValor2('');
    setResultado('');
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Calculadora</Text>

      <Text style={styles.labels}>Valor 1</Text>
      <TextInput style={styles.txtValor} keyboardType='decimal-pad' value={valor1} onChangeText={setValor1} />

      <Text style={styles.labels}>Valor 2</Text>
      <TextInput style={styles.txtValor} keyboardType='decimal-pad' value={valor2} onChangeText={setValor2} />

      <View style={styles.botoesContainer}>
        <TouchableOpacity style={styles.btnOperacao} onPress={() => calcular('+')}><Text style={styles.txtBtn}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnOperacao} onPress={() => calcular('-')}><Text style={styles.txtBtn}>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnOperacao} onPress={() => calcular('*')}><Text style={styles.txtBtn}>×</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnOperacao} onPress={() => calcular('/')}><Text style={styles.txtBtn}>÷</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnOperacao} onPress={() => calcular('^')}><Text style={styles.txtBtn}>^</Text></TouchableOpacity>
      </View>

      <Text style={styles.resultado}>Resultado: {resultado}</Text>

      <TouchableOpacity style={styles.btnLimpar} onPress={limpar}>
        <Text style={styles.txtBtnLimpar}>Limpar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  icone: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#961717',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    borderWidth: 3,
    borderColor: 'black',
    padding: 10,
    fontWeight: 'bold',
    color: 'yellow',
    backgroundColor: 'black',
    borderRadius:35
  },
  labels: {
    fontSize: 22,
    padding: 10,
    fontWeight: 'bold',
    color:'white',
    marginTop: 20
  },
  txtValor: {
    borderWidth: 1,
    backgroundColor: 'black',
    color:'white',
    fontWeight:'bold',
    fontSize: 20,
    width: '50%',
    height: 45,
    padding: 10,
    borderBottomColor: 'black',
    textAlign: 'center'
  },
  botoesContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  btnOperacao: {
    backgroundColor: 'yellow',
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 5,
    padding: 10,
  },
  txtBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
  btnLimpar: {
    marginTop: 20,
    backgroundColor: 'red',
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
  },
  txtBtnLimpar: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
});
