import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import Form from './src/utils/components/Forms';
import colors from './src/utils/colors';
import Footer from './src/utils/components/Footer';
import Calculoresultado from './src/utils/components/Calculoresultado';
import calculoresultado from './src/utils/components/Calculoresultado';
//import { useState } from 'react';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMensaje, setErrorMensaje] = useState('');

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMensaje('Añade la cantidad que quieres solicitar');
    } else if(!interest) {
      setErrorMensaje('Añade el interes del prestamo');
    } else if (!months) {
      setErrorMensaje('Selecione los meses a pagar');
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        cuotamensual: fee.toFixed(2),
        totalpagar: (fee * months).toFixed(2),
      });
    }
  };

  const reset = () => {
    setErrorMensaje('');
    setTotal(null)
  }

  return(
    <>
    <StatusBar barStyle='light-content'/>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background} />
      <Text style={styles.titleApp}>Formulario Head</Text>
      <Form 
        setCapital={setCapital}
        setInterest={setInterest}
        setMonths={setMonths}
      />
    </SafeAreaView>
    <Calculoresultado
      capital={capital}
      interest={interest}
      months={months}
      total={total}
      errorMensaje={errorMensaje} 
    />
    <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  }
})
