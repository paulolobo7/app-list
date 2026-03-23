import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({ 
     boxInput:{
            width:350,
            height:50,
            borderWidth:1,
            borderRadius:40,
            marginTop:10,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            paddingHorizontal:10,
            backgroundColor:themes.colors.lightgray,
            borderColor:themes.colors.lightgray,
            alignSelf:'center'
           },
     input:{
            flex:1,
            height:'100%',
            borderRadius:50,
            paddingLeft:20,
            },
     titleInput:{
             alignSelf:'center',
             width: 350,
             paddingLeft:10,
             color: themes.colors.gray,
             marginTop:20
            }, 
        icon:{
             width:'100%',
        },
      button:{
             width:'10%',
      }     
})