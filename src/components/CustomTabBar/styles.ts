import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({ 
       button:{
         width:200,
         height:50,
         borderRadius:40,
         alignItems:'center',
         justifyContent:'center',
         backgroundColor:themes.colors.primary,
         marginTop:50,
         boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      textButton:{
         color:themes.colors.secondary,
         fontWeight:'bold',
         fontSize:16
         
      },
})