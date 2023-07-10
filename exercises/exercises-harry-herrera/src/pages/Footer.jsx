
import React from 'react'
import { StyleSheet, View, Image, Text, Button } from 'react-native'

const Footer = () => {
  return (
    <View style={styles.card}>
        <View style={styles.card__header}>
            <Text style={styles.card__header_title}>Se Busca!</Text>
        </View>

        <View style={styles.card__header_img}>
            <Image
                style={styles.card__header_img1}
                source={{uri: 'https://i.postimg.cc/901Fhc5J/descarga.jpg'}}
            />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f8006c',
      padding: 7,
      borderRadius: 10,
      alignItems: 'center',
    },
  
    card__header: {
      padding: 10,
    },
  
    card__header_title: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },

    card__header_img: {
        position: 'absolute',
        top: 100,
      },
    
      card__header_img1: {
        width: 200,
        height: 200,
      }
  });

export default Footer