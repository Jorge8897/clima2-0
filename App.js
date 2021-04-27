import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import StyleClima from './styles/StylesClima';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

export default function App() {
  //Son los datos de consulta
  const [formulario, setFormulario] = useState({ ciudad: '', pais: '' });
  //Si los datos no son vacios flag -> True
  const [flag, setFlag] = useState(false);
  //Guardar el resultado de la llamada del Cthulu.... perdon del clima
  const [resClima, setResClima] = useState({});
  //Efecto Chido de color de fondo
  const [bgColor, setBgColor] = useState('cornflowerblue');

  //Vamos a declarar un estilo
  const bgColorApp = { backgroundColor: bgColor };

  //Descomposición del state formulario
  const { ciudad, pais } = formulario;

  //Empleamos el useEffect
  useEffect(() => {
    //console.log('Entro useEffect');
    const getClima = async () => {
      //console.log('valor de flag');
      //console.log(flag);
      if (flag) {
        //console.log('Entro al if de flag');
        const apiKey = '0a68578cafc33159602d735e8019f45a';
        const urlApi = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&lang=es&units=metric&appid=${apiKey}`;
        try {
          const respuesta = await fetch(urlApi);
          const climaData = await respuesta.json();
          //console.log(climaData);
          setResClima(climaData);
          setFlag(false);
          const { main } = climaData;
          const temp = main.temp;
          if (temp < 10) {
            setBgColor('midnightblue');
          } else if (temp < 29) {
            setBgColor('mediumspringgreen');
          } else {
            setBgColor('firebrick');
          }
        } catch (error) {
          Alert.alert('Error', 'No se encontraron datos del clima', [
            { text: 'OK' },
          ]);
        }
      }
    };

    getClima();
  }, [flag]);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={[StyleClima.container, bgColorApp]}>
          <Clima resClima={resClima} />
          <Formulario
            formulario={formulario}
            setFormulario={setFormulario}
            setFlag={setFlag}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
