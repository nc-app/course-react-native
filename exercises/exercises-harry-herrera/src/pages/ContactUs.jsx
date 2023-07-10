
import React from 'react'
import { StyleSheet, View, Image, Text, Button } from 'react-native'

const ContactUs = () => {
  return (
    <View style={styles.card}>
        <View style={styles.card__header}>
            <Text style={styles.card__header_title}>Dejese Atender!</Text>
        </View>

        <View style={styles.card__footer}>
        <Text style={styles.card__footer_text}> Vendemos Zapatillas, blusas, pantalones a mil</Text>

        <View style={styles.card__footer_button}>
          <Button style={styles.card__footer_button1}
          title="Presioname"
          width="15"
          color="#94fff8"
          borderRadius="50"
          />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
      backgroundColor: '#00ff5e',
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
    
    card__footer: {
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        padding: 15,
        textAlign: 'center',
        backgroundColor: '#b2b2b2',
        borderWidth: 3,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
    
      card__footer_text: {
        margin: 10,
        color: 'white',
      },
    
      card__footer_button: {
        margin: 10,
      },
    
      card__footer_button1: {
        width: 10,
      }
  });

export default ContactUs