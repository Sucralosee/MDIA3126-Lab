import React from "react";
import { Text, View } from "react-native";
import Profile from "@/components/molecules/profile";

export default function Index() {
  return (
    <View
      style={{
        alignItems:"center"
        
      }}

    >
      <Profile 
        SingleLineText="Bulbasaur"
        multiLineText="🌱 Kanto native, born in Pallet Town.
🍃 Thriving under the Kanto sun, exploring with my trainer.
💚 Battling, exploring, and growing stronger every day!"
        imageToAdd="https://i.ebayimg.com/00/s/MTU5N1gxNjAw/z/7fAAAOSwe-NgXQsy/$_12.JPG?set_id=880000500F"
      />
    </View>
  );
}
