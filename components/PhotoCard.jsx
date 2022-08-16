import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

export default function PhotoCard({photo}){
    return(

        <View>
            <Text>{photo.description}</Text>
        </View>

    )
}