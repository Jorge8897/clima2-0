import React from 'react';
import { StyleSheet, Platform } from 'react-native';

const StyleClima = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: 'indigo',
    justifyContent: 'center',
  },
  inCd: {
    backgroundColor: 'lightpink',
    borderBottomColor: 'hotpink',
    borderBottomWidth: 2,
    width: '95%',
    margin: 5,
  },
  inPais: {
    height: 50,
    backgroundColor: 'lightpink',
    margin: 5,
    color: 'black',
  },
  inBoton: {
    backgroundColor: 'lightpink',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  txBoton: {
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'Arial-BoldMT' : 'monospace',
    fontSize: 20,
    textAlign: 'center',
  },
  txSombra: {
    textShadowColor: 'midnightblue',
    textShadowOffset: { width: -2, height: -2 },
    textShadowRadius: 6,
  },
  climaContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datosContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imgBck: {
    flex: 1,
    width: '95%',
    height: '95%',
    resizeMode: 'cover',
  },
  imgSmall: {
    height: 13,
    width: 13,
    resizeMode: 'cover',
  },
  txDatos: { color: 'white', fontSize: 14 },
  txTemp: { color: 'white', fontSize: 50 },
  txCd: { color: 'white', fontSize: 30, fontWeight: 'bold' },
});

export default StyleClima;
