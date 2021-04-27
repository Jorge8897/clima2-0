import React, {useState} from 'react';
import {
  Text,
  TextInput,
  Animated,
  Alert,
  Platform,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import StyleClima from '../styles/StylesClima';
import { Picker } from '@react-native-community/picker';

const Formulario = ({formulario, setFormulario, setFlag}) => {
  //Descomponemos el State de formulario en sus partes
  const {pais, ciudad} = formulario;

  const consultaClima = () =>{
    //console.log('Entro a Consulta Clima');
    if(pais.trim() === '' || ciudad.trim() === ''){
      //console.log('algun dato va vacio')
      showAlert('Error', 'Ciudad o País estan vacios');
      return;
    }
    setFlag(true);
  };

  const showAlert = (varErr, varMens) =>{
    Alert.alert(varErr, varMens, [{text:'OK'}]);
  }
  /* ANIMACION */
  const [animacion] = useState(new Animated.Value(1))

  const aniPressIn = () =>{
    Animated.spring(animacion,{
      toValue:0.8,
      friction:0.75,
      tension:30,
      useNativeDriver: true
    }).start();
  }

  const aniPressOut = () =>{
    Animated.spring(animacion,{
      toValue:1,
      friction:0.75,
      tension:30,
      useNativeDriver: true
    }).start();
  }

  const styleAni = {
    transform: [{scale: animacion}]
  };
/*Termina Animació */

  return (
    <>
    <View>
      <TextInput
        value={ciudad}
        onChangeText={(ciudad)=>setFormulario( {...formulario, ciudad})}
        style={StyleClima.inCd}
        placeholder="Ciudad"
      />
    </View>
    <View>
      <Picker 
      selectedValue={pais}
      onValueChange={(pais)=>setFormulario( {...formulario, pais})}
      style={StyleClima.inPais}>
        <Picker.Item value="" label="Seleciona un país <<<<<<<" />
        <Picker.Item value="MX" label="México" />
        <Picker.Item value="US" label="Estados Unidos" />
        <Picker.Item value="UK" label="Reino Unido" />
        <Picker.Item value="JP" label="Japón" />
        <Picker.Item value="RU" label="Rusia" />
         <Picker.Item value="KP" label="Corea del Norte" />
      </Picker>
    </View>
    <TouchableWithoutFeedback
      onPressIn={()=> aniPressIn()}
      onPressOut={()=> aniPressOut()}
      onPress={() => consultaClima()}
    >
      <Animated.View style={[StyleClima.inBoton, styleAni]}>
        <Text style={[StyleClima.txBoton, StyleClima.txSombra]}>Consultar el clima</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
</>
  );
};

export default Formulario;
