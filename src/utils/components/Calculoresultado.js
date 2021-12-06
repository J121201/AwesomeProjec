import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function calculoresultado(props) {
    const {capital, interest, months, total, errorMensaje} = props;
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.cajaresultado}>
                    <Text style={styles.titulo}>RESUMEN</Text>
                    <DatosResultados titulo='Cantidad solicitada:' valor={`${capital} $`} />
                    <DatosResultados titulo='Interes %:' valor={`${interest} %`} />
                    <DatosResultados titulo='Plazos:' valor={`${months} meses`} />
                    <DatosResultados titulo='Pago Mensual:' valor={`${total.cuotamensual} $`} />
                    <DatosResultados titulo='Total a pagar:' valor={`${total.totalpagar} $`} />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMensaje}</Text>
            </View>
        </View>
    )
}

function DatosResultados(props) {
    const {titulo, valor} = props;
    return (
        <View style={styles.valores}>
            <Text>{titulo}</Text>
            <Text>{valor}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },
    cajaresultado: {
        padding: 30,
    },
    titulo: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    valores: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
})
