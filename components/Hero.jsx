import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function Hero() {
  return (
    <View style={styles.headerbar}>
      <Text style={styles.headerText}>Bocagram</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerbar: {
    height: 50,
    backgroundColor: 'white'
  },

  headerText: {
    fontSize: 18,
    fontWeight: "900", 
    textAlign: 'center'
  },
})
