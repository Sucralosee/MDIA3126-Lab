import React from "react";
import { Text, View } from "react-native";
import MultiLine from "@/components/atoms/multiLine";
import ProfileImage from "@/components/atoms/profileImage";
import SingleLine from "@/components/atoms/singleLine";

export default function Profile( {SingleLineText,multiLineText,imageToAdd} ) {
  return (
    <View 
        style={{
            width: 640,
            height: 220,
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"row",
            margin: 64,
            backgroundColor: "#D5E3C9", 
            borderRadius: 16,
        }}
    >
        <div 
            style={{

            }}
        >
            <ProfileImage imageToAdd={imageToAdd} />
        </div>
        <div
            style={{
                padding: 24,
            }}
        >
            <SingleLine SingleLineText={SingleLineText} />
            <MultiLine multiLineText={multiLineText}/>
        </div>
    </View>
  );
}
