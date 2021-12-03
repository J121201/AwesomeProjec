import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Form from './src/utils/components/Forms';
import colors from './src/utils/colors';

export default function App() {
  return(
    <>
    <StatusBar barStyle='light-content'/>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background} />
      <Text style={styles.titleApp}>Formulario Head</Text>
      <Form />
    </SafeAreaView>
    <View>
      <Text>Resultado</Text>
    </View>
    <View>
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
