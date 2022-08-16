import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import PhotoCard from "./PhotoCard"

const bsPhotos = [
  { id: 1, description: "selfie with mom" },
  { id: 2, description: "this is a post" },
  { id: 3, description: "I like colors" },
  { id: 4, description: "Black and white skyline" },
  { id: 5, description: "doing a little dance" },
  { id: 6, description: "latte art of minions" },
]

export default function PhotoList() {
  return <ScrollView style={styles.photoList}>
    {bsPhotos.map(photo => (
        <PhotoCard key={photo.id} photo={photo}/>
    ))}

  </ScrollView>
}

const styles = StyleSheet.create({
  photoList: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },
})
