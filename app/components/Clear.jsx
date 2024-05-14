import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/colors';

export default function Clear({ press }) {
    return (
        <TouchableOpacity style={styles.button} onPress={press}>
            <Text style={{ fontSize: 30, color: COLORS.DARK_GRAY }}>clear</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 160,
        height: 80,
        borderWidth: 1,
        borderColor: COLORS.DARK_RED,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
});