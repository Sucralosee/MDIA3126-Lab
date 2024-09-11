import React from "react";
import { Text, View } from "react-native";
import MultiLine from "@/components/atoms/multiLine";
import ProfileImage from "@/components/atoms/profileImage";
import SingleLine from "@/components/atoms/singleLine";

export default function Profile( {SingleLineText,multiLineText,imageToAdd} ) {
  return (
    <View 
        style={{
            width: 480,
            height: 240,
            justifyContent: "center",
            alignItems: "center",
            margin: 48,
            backgroundColor: "tan" 
        }}
    >
      <SingleLine SingleLineText={SingleLineText} />
      <MultiLine multiLineText={multiLineText}/>
      <ProfileImage imageToAdd={imageToAdd} />
    </View>
  );
}
