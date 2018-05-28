import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.imageBox}>
                    <Image style={styles.thumbNail} source={{ uri: props.album.thumbnail_image}} />
                </View>
                <View style={styles.headerText}>
                    <Text style={styles.headerTitle}>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.image} source={{ uri: props.album.image}} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(props.album.url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    headerText: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTitle: {
        fontSize: 18
    },
    thumbNail: {
        height: 50,
        width: 50
    },
    imageBox: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 300,
        flex: 1,
        width: null
    }
})

export default AlbumDetail;