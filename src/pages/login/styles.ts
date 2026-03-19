import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({
     container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        

     },
     boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:'lightgray',
        alignItems:'center',
        justifyContent:'center'
     },
     boxMid:{
         height:Dimensions.get('window').height/4,
         width:'100%',
         //backgroundColor:'lightgray',
         paddingHorizontal:37,
     },
     boxBottom:{
         height:Dimensions.get('window').height/3,
         width:'100%',
         alignItems:'center',  
     },
     logo:{
        width:80,
        height:80
     },
     text:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:40
     },
       titleInput:{
         marginLeft:10,
         color: themes.colors.gray,
         marginTop:20
       },
        input:{
         width:'90%',
         height:'100%',
         borderRadius:50,
         paddingLeft:20,
       },
       boxInput:{
         width:'100%',
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
      textBottom:{
         fontSize:15 ,
         marginTop:20,
         color: themes.colors.gray,
      },





})