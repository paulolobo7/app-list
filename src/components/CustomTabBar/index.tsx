import React from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { style } from "./styles";
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { themes } from "../../global/themes";


export default({state, navigation})=> {

  const goTo = (screenName:string) => {
    navigation.navigate(screenName)
  }
  // console.log(state)


  return (

    
    
    <>
      <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={()=>goTo("List")}>
                
               <AntDesign
                    name="bars"
                    style={{opacity:state.index === 0?1:0.5,color:themes.colors.primary, fontSize:32}}
               />

            </TouchableOpacity>


            <TouchableOpacity style={style.tabItemButtom}>

                <View style={{width:'100%', justifyContent:'flex-start',left:9, top:4}}>
                    <Entypo  
                      name="plus"
                      size={40}
                      color={"#FFFFFF"}
                    />  
                </View>
                <View style={{flexDirection:'row',width:'100%', right:8,justifyContent:'flex-end', bottom:10}}>
                    <MaterialIcons
                      name="edit"
                      color={"#FFFFFF"}
                      size={30}
                    />
                </View>
            </TouchableOpacity>


            <TouchableOpacity style={style.tabItem} onPress={()=>goTo("User")}>
              
                <FontAwesome
                    name="user"
                    style={{opacity:state.index === 1?1:0.3,color:themes.colors.primary, fontSize:32}}
               />

            </TouchableOpacity>
      </View>
    </>
  )
}