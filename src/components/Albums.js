import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail'

import axios from 'axios';


class Albums extends Component {

    state = {
        albums: []
    }

    componentWillMount(){
        axios.get('http://rallycoding.herokuapp.com/api/music_albums').then( (resp) => {
            this.setState({albums: resp.data})
        })
    }

    renderAlbums = () => {
        return this.state.albums.map(album => {
            return <AlbumDetail key={album.title} album={album} />
        })
    }

    render(){
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

export default Albums;