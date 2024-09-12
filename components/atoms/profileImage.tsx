import { Image, View } from "react-native";

export default function ProfileImage( {imageToAdd} ) {
    return(
        <View>
            <Image 
                source={{ uri: imageToAdd}} 
                style={{
                    width: 180,
                    height: 180, 
                    borderRadius: 12,
                }}
            />        
        </View>
    ) 
}