import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";



export const style = StyleSheet.create({ 
         tabArea:{
            flexDirection:"row",
            height:80,
            justifyContent:"space-around",
            backgroundColor:themes.colors.secondary,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
         tabItem:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
         },
         tabItemButtom:{
             width:70,
             height:70,
             borderRadius:35,
             alignItems:"center",
             justifyContent:"center",
             zIndex:9999,
             top:-20,
             backgroundColor:themes.colors.primary

         }
      
})