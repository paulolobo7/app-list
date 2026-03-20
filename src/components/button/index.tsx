import React from "react";
import { Text, ActivityIndicator, TouchableHighlightProps,TouchableOpacity } from "react-native"
import { style } from "./styles";


type ButtonProps = TouchableHighlightProps & {
  text:string;
  loading?:boolean;

}

export function Button({...rest}) {
  return (
    <>
        <TouchableOpacity 
            style={style.button}
            {...rest}
            >
              {rest.loading?<ActivityIndicator color={'#FFFF'} size={"small"} />
              :
              <Text style={style.textButton}>{rest.text}</Text>}
        </TouchableOpacity>
    </>
  )
}