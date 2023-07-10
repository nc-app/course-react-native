
import React from 'react'
import {StyleSheet, View, Text, Image, Button} from 'react-native'

const Card01 = () => {

    return(
        <View style={styles.card}>
            <View style={styles.card__header}>
                <Image style={styles.card__header_image} source={require('../../assets/cap-award.png')}/>
                <Text style={styles.card__body_title}>CARD 01</Text>
                <Text style={styles.card__body_subtitle}>Card Basic 01</Text>
            </View>
            <View style={styles.card__body}>
                <Text style={styles.card__footer_text}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</Text>
            </View>
            <View style={styles.card__footer}>
                <Button 
                    title='View'
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        gap: 20,
        shadowColor: '#1E88E5',
        shadowOpacity: 10,
    },

    card__header: {
    },

    card__body: {
    },

    card__body_title: {
        fontSize: 22,
        textAlign: 'center',
        color: '#1E88E5',
    },

    card__body_subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: '#1E88E5',
    },

    card__footer: {
    },

    card__footer_text: {
        textAlign: 'center',
        fontSize: 16,
        color: '#9E9E9E',
    }
})

export default Card01