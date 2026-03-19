import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({ 
     boxInput:{
            width:450,
            height:50,
            borderWidth:1,
            borderRadius:40,
            marginTop:10,
            flexDirection:'row',
            alignItems:'center',
            paddingHorizontal:10,
            backgroundColor:themes.colors.lightgray,
            borderColor:themes.colors.lightgray
           },
     input:{
             width:'90%',
            height:'100%',
            borderRadius:50,
            paddingLeft:20,
            },
     titleInput:{
             marginLeft:10,
             color: themes.colors.gray,
             marginTop:20
            },  
})