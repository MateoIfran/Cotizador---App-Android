import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Result(props) {
    const { capital, interes, mes, total, errorMessage } = props
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESULTADO</Text>
                    <DataResult title={"Cantidad solicitada: "} value={`${capital} $`}></DataResult>
                    <DataResult title={"Interés: "} value={`${interes} %`}></DataResult>
                    <DataResult title={"Plazos: "} value={`${mes} meses`}></DataResult>
                    <DataResult title={"Pago mensual: "} value={`${total.monthlyFee} $`}></DataResult>
                    <DataResult title={"Total a pagar: "} value={`${total.totalPayable} $`}></DataResult>
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}

function DataResult(props) {
    const {title, value} = props
  
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
  }

const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
        color: "#f00",
        fontWeight: 'bold',
        fontSize: 20,
    },
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize:25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    }
})
