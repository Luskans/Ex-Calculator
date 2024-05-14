import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './app/components/Screen';
import Clear from './app/components/Clear';
import Operation from './app/components/Operation';
import Number from './app/components/Number';
import { useEffect, useState } from 'react';
import { ShakeEventExpo } from './app/utils/shake';

export default function App() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operation, setOperation] = useState('')

  useEffect(() => {
    ShakeEventExpo.addListener(() => {
      clear()
    });
  }, [])

  const handleNumberPress = (buttonValue) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue)
    }
  }

  const handleOperationPress = (buttonValue) => {
    if (firstNumber !== '' && secondNumber !== '') {
      getResult()
      setOperation(buttonValue)

    } else if (firstNumber === '' && secondNumber !== '') {
      setOperation(buttonValue)

    } else {
      setOperation(buttonValue)
      setSecondNumber(firstNumber)
      setFirstNumber('')
    }
  }

  const clear = () => {
    setFirstNumber('')
    setSecondNumber('')
    setOperation('')
  }

  const getResult = () => {
    switch (operation) {
      case "+":
        clear()
        setSecondNumber(parseInt(secondNumber) + parseInt(firstNumber))
        break
      case "-":
        clear()
        setSecondNumber(parseInt(secondNumber) - parseInt(firstNumber))
        break
      case "x":
        clear()
        setSecondNumber(parseInt(secondNumber) * parseInt(firstNumber))
        break
      case "/":
        clear()
        setSecondNumber(parseInt(secondNumber) / parseInt(firstNumber))
        break
      default:
        break
    }
  }

  const displayResult = () => {
    if (firstNumber === '' && secondNumber === '') {
      return "0"
    } else if (firstNumber === '' && secondNumber !== '') {
      return secondNumber
    } else {
      return firstNumber
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Screen text={displayResult()} />
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Clear press={() => clear()} />
          <Operation text="=" press={() => getResult()} />
          <Operation text="+" press={() => handleOperationPress('+')} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Number text="7" press={() => handleNumberPress('7')} />
          <Number text="8" press={() => handleNumberPress('8')} />
          <Number text="9" press={() => handleNumberPress('9')} />
          <Operation text="-" press={() => handleOperationPress('-')} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Number text="4" press={() => handleNumberPress('4')} />
          <Number text="5" press={() => handleNumberPress('5')} />
          <Number text="6" press={() => handleNumberPress('6')} />
          <Operation text="x" press={() => handleOperationPress('x')} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Number text="1" press={() => handleNumberPress('1')} />
          <Number text="2" press={() => handleNumberPress('2')} />
          <Number text="3" press={() => handleNumberPress('3')} />
          <Operation text="/" press={() => handleOperationPress('/')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 320,
    height: 400,
  },
});
