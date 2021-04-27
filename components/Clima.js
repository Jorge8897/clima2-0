import React, { useState } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import StyleClima from '../styles/StylesClima';

const Clima = ({ resClima }) => {
  //Sacamos los datos de resClima
  const { name, main, weather, wind, sys } = resClima;

  if (!name) return null;
  var sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString('en-MX');
  var sunset = new Date(sys.sunset * 1000).toLocaleTimeString('en-MX');


  return (
    <View style={StyleClima.climaContainer}>
      <ImageBackground
        source={{uri:`http://openweathermap.org/img/w/${weather[0].icon}.png`}}
        style={StyleClima.imgBck}>
        <View>
          <Text style={[StyleClima.txSombra, StyleClima.txCd]}>{name}</Text>
        </View>
        <View style={StyleClima.datosContainer}>
          <View style={{ flex: 2 }}>
            <Image
              source={require('../assets/icons8-pressure-gauge-96.png')}
              style={StyleClima.imgSmall}
            />
            <Text style={[StyleClima.txSombra, StyleClima.txDatos]}>
              {main.pressure}
            </Text>
            <Image
              source={require('../assets/icons8-wet-96.png')}
              style={StyleClima.imgSmall}
            />
            <Text style={[StyleClima.txSombra, StyleClima.txDatos]}>
              {main.humidity}
            </Text>
            <Image
              source={require('../assets/icons8-wind-96.png')}
              style={StyleClima.imgSmall}
            />
            <Text style={[StyleClima.txSombra, StyleClima.txDatos]}>
              {wind.speed}
            </Text>
          </View>
          <View style={{ flex: 4 }}>
            <View>
              <Text style={[StyleClima.txSombra, StyleClima.txTemp]}>
                {main.temp} &#x2103;
              </Text>
            </View>
            <View>
              <Text style={[StyleClima.txSombra, StyleClima.txDatos]}>
                Min {main.temp_min} &#x2103;
              </Text>
              <Text style={[StyleClima.txSombra, StyleClima.txDatos]}>
                Max. {main.temp_max} &#x2103;
              </Text>
            </View>
            <View>
              <Text style={[StyleClima.txSombra, StyleClima.txDatos]}>
                {weather[0].description}
              </Text>
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <Image
              source={require('../assets/icons8-sunrise-96.png')}
              style={StyleClima.imgSmall}
            />
            <Text style={[StyleClima.txSombra, StyleClima.txDatos]}>
              {sunrise}
            </Text>
            <Image
              source={require('../assets/icons8-sunset-96.png')}
              style={StyleClima.imgSmall}
            />
            <Text style={[StyleClima.txSombra, StyleClima.txDatos]}>
              {sunset}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Clima;
