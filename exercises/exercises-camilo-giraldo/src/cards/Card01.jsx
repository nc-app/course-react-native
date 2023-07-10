import React from 'react'
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

const Card01 = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.card__text}>COMPRA AHORA</Text>
            <Text style={styles.card__text_price}>$99.900</Text>
            <Image style={styles.card__img} source={require('../../assets/img/ball.png')} />
            <TouchableOpacity style={styles.card__button}>
              <Text style={styles.card__buttonText}>COMPRAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    card__text: {
        color: '#ffffff',
        textAlign: 'center',
        margin: 5,
        fontSize: 40,
        fontWeight: 'bold',
    },

    card__text_price: {
        color: '#FFD600',
        textAlign: 'center',
        margin: 5,
        fontSize: 60,
        fontWeight: 'bold',
    },


    card__button: {
        backgroundColor: '#FFD600',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },

    card__buttonText: {
        color: '#000000',
        fontSize: 30,
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: 'bold',
    },
})

export default Card01
