
import React from 'react'
import { StyleSheet, View, Image, Text, Button } from 'react-native'

const Card02 = () => {
  return (
    <View style = {styles.card}>
        <View style = {styles.card__container}>
            <Image 
                style={styles.card__container_image}
                source={require('../../assets/img/profile.webp')}
            />
        </View>
        
        <Text style = {styles.card__container_title}>
            Lorem ipsum dolor 
        </Text>

        <Text style = {styles.card__container_subtitle}>
           consectetur 
        </Text>

        <Button style = {styles.card__container_button}
            title="lorem"
            onPress={() => Alert.alert('Simple Button pressed')}
         />

        <Text style = {styles.card__container_text}>
            sit amet consectetur 
        </Text> 
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        borderRadius: 7,
        backgroundColor: '#EEEEEE'
    },

    card__container: {
        alignItems: 'center',
    },

    card__container_title: {
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#616161',
    },

    card__container_subtitle: {
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
        color: '#757575',
    },

    card__container_text: {
        marginTop: 5,
        textAlign: 'center',
        color: '#757575',
    },

  })

export default Card02