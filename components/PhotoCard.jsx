import React from "react"
import { View, Image, Text } from "react-native"
import { photoCardStyles } from "../assets/styles"

import { Avatar, Icon } from "react-native-elements"

export default function PhotoCard({ photo }) {
  
  const BASE_URL = `https://source.unsplash.com/random?funny=`
    return (
    <>
      <View style={photoCardStyles.cardContainer}>
        <View style={photoCardStyles.cardHeader}>
          {/* avatar */}
          <Avatar rounded size='small' source={{uri: `https://randomuser.me/api/portraits/men/${photo.id}.jpg`}}/>
          <View style = {photoCardStyles.cardHeaderText}>
            <Text h5>Manik Gupta</Text>
            <Text style = {photoCardStyles.cardLocation}>San Francisco</Text>
          </View>
        </View>
        <Icon name = "code"/>
      </View>

      <Image source={{url: BASE_URL + 1}} style = {photoCardStyles.cardImage}/>

      <Text style ={photoCardStyles.cardText}>Text here</Text>
    </>
  )
}
