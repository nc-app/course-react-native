import React from 'react'
import { StyleSheet, View, Image, Text, Button } from 'react-native'

const Card01 = () => {
  return (
    <View style={styles.card}>
      <View style={styles.card__header}>
        <Text style={styles.card__header_title}>Hello harry!</Text>

        <View style={styles.card__header2}>
          
          <View style={styles.card__header_img}>
            <Image
                style={styles.card__header_img1}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          </View>

          <View style={styles.card__header_img}>
            <Image
                style={styles.card__header_img1}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
          </View>

        </View>
      </View>

      <View style={styles.card__body}>
        <View style={styles.card__body_img}>
          <Image
              style={styles.card__body_img_1}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
         </View>

         <View style={styles.card__body_img2}>
          <Image
              style={styles.card__body_img_1}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
         </View>

         <View style={styles.card__body_img2}>
          <Image
              style={styles.card__body_img_1}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
         </View>

         <View style={styles.card__body_img}>
          <Image
              style={styles.card__body_img_1}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
         </View>
      </View>

      <View style={styles.card__footer}>
        <Text style={styles.card__footer_text}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique error veritatis dolore nulla cupiditate quasi</Text>

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
    backgroundColor: '#61dafb',
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

  card__header2: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 7,
    flexDirection: 'row',
    gap: 4,
  },

  card__header_img: {
    position: 'relative',
    top: 10,
  },

  card__header_img1: {
    width: 50,
    height: 50,
  },

  card__body: {
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    gap: 5,
  },

  card__body_img2: {
    position: 'relative',
    top: 25,
    marginBottom: 10,
  },

  card__body_img_1: {
    width: 50,
    height: 50,
  },

  card__footer: {
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    padding: 15,
    textAlign: 'center',
    backgroundColor: '#5cc5ef',
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

export default Card01