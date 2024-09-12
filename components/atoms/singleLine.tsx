import { Text, View } from "react-native";

export default function SingleLine( {SingleLineText}) { 
    return(
        <View>
            <Text
                style={{
                    color:"#132B1D",
                    fontSize: 36,
                    fontWeight: "bold",
                }}
            >
                {SingleLineText}    
            </Text>
        </View>
    ) 
}