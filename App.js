import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Navigation from './src/navigation'

export default function App(){
  return (
    <Navigation/>
  )
} 

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor: "#f9fbfc"
  }
})

