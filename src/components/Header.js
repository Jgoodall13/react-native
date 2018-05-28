import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                Albums
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    view: {
        backgroundColor: '#F8F8F8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.8
    },
    text: {
        fontSize: 24,
        color: 'hotpink',
        paddingTop: 10
    }
})

export default Header