import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/colors';

export default function Screen({text}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 60, color: COLORS.WHITE, paddingRight: 20}}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 100,
        borderWidth: 1,
        borderColor: COLORS.BROWN,
        backgroundColor: COLORS.BROWN,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
});