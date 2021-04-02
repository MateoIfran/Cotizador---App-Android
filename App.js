import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox, Button} from 'react-native';
import colors from './src/utils/colors'
import Form from './src/components/Form'
import Footer from './src/components/Footer'
import Result from './src/components/Result'

YellowBox.ignoreWarnings(["Picker has been extracted"])

export default function App() {
  const [capital, setCapital] = useState(null)
  const [interes, setInteres] = useState(null)
  const [mes, setMes] = useState(null)
  const [total, setTotal] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (capital && interes && mes) {
      calculate()      
    } else {
      reset()
    }
  }, [capital, interes, mes])

  const calculate = () => {
    reset()
    if(!capital) {
      setError("Añade la cantidad que quieres solicitar.")
    } else if (!interes) {
      setError("Añade el interés.")
    } else if (!mes) {
      setError("Selecciona los meses.")
    } else {
      const i = interes / 100
      const fee = capital / ((1 - Math.pow(i + 1, - mes)) / i)
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * mes).toFixed(2).replace('.', ',')
      })
    }
  }

  const reset = () => {
    setError("")
    setTotal(null)
  }

  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}></View>
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form 
          setCapital= {setCapital} 
          setInteres= {setInteres} 
          setMes= {setMes}>
        </Form>
      </SafeAreaView>

      <Result 
        errorMessage={error}
        capital={capital}
        interes={interes}
        mes={mes}
        total={total}></Result>

      <Footer calculate={calculate}></Footer>   
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,
    position: "absolute",
  }
});
