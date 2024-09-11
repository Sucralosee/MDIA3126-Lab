import { Image, View } from "react-native";

export default function ProfileImage( {imageToAdd} ) {
    return(
        <View>
            <Image 
                source={{ uri: imageToAdd}} 
                style={{
                    width: 160,
                    height: 160, 
                    borderRadius: 12,
                }}
            />        
        </View>
    ) 
}