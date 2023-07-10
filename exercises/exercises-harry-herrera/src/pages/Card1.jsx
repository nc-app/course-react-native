
import React from 'react'
import { StyleSheet, View , Text, Image } from 'react-native'

const Cardosky = () => {
  return (
    <View style = {styles.card}>
        <Text style = {styles.card__text}>
            Card 01
        </Text>

        <Image 
            style={styles.tinyLogo}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderRadius: 3,
        backgroundColor: '#000000'
    },

    card__text: {
       color: '#FFFFFF',
    },

  })

export default Cardosky