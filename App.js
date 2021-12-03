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
//import { useState } from 'react';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);

  const onSubmit = () => {
    console.log('capital ->', capital)
    console.log('interest ->', interest)
    console.log('months ->', months)
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
    <View>
      <Text>Resultado</Text>
    </View>
    <View>
      <Button title='Enviar' onPress={onSubmit} />
      <Text>Footer</Text>
    </View>
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
