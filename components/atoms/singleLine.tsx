import { Text, View } from "react-native";

export default function SingleLine( {SingleLineText}) { 
    return(
        <View>
            <Text
                style={{
                    color:"black",
                    fontSize: 36,
                    fontWeight: "bold",
                }}
            >
                {SingleLineText}    
            </Text>
        </View>
    ) 
}