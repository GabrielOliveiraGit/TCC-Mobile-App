import { isTemplateElement } from '@babel/types';
import React from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'

export default OnBoardingItem = ({item}) => {
    const { width } = useWindowDimensions();
    return (
        <View style= {[styles.container, {width}]}>
            <Image source = {item.image} style={[styles.image, { width, resizeMode: 'contain'}]} />

            <View style = {{ flex: 0.3 }}>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image:{
        flex: 0.3,
        justifyContent: 'center',
        marginTop: -60,
    },

    description:{
    fontSize: 28,
    color: '#FFF',
    textAlign: 'center',
    paddingHorizontal: 45,
    marginTop: 20
    }
});