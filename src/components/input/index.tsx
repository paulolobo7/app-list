import React, { forwardRef, Fragment, Ref } from "react";
import { View, Text, TextInput,TextInputProps,TouchableOpacity } from "react-native"
import { style } from "./styles";
import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';
import { themes } from "../../global/themes";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent;
    IconRight?: IconComponent;
    iconLeftname?: string;
    iconRightname?: string;
    title?: string;
    onIconLeftPress?: () => void;
    onIconRightPress?: () => void;

}

export const Input = forwardRef((Props: Props, ref: Ref<TextInput> | null)=>{

    const { IconLeft, IconRight, iconLeftname, iconRightname, title, 
            onIconLeftPress, onIconRightPress, ...rest } = Props;
    
    
    
        const calculateSizeWidth = () => {
        if(IconLeft && IconRight){
            return '80%';
        }else if(IconLeft || IconRight){
            return '90%';
        }else{
            return '100%';
        }
    }   
    
        const calculateSizePadding = () => {
        if(IconLeft && IconRight){
            return 20;
        }else if(IconLeft || IconRight){
            return 20;
        }else{
            return 20;
        }
    }

    return(
        <Fragment>  
    {title && <Text style={style.titleInput}>{title}</Text>}
      <View style={[style.boxInput, { paddingLeft: calculateSizePadding() }]}>
            <TouchableOpacity onPress={onIconLeftPress} >
                {IconLeft && iconLeftname && (
                    <IconLeft name={iconLeftname as any} size={24} 
                              color={themes.colors.gray} style={style.icon}/>
                )}
            </TouchableOpacity>

              <TextInput style={[
                            style.input, 
                            { width: calculateSizeWidth() }
                            ]}
                            {...rest}

              />
              
            <TouchableOpacity onPress={onIconRightPress}>
                {IconRight && iconRightname && (
                    <IconRight name={iconRightname as any} size={24} 
                               color={themes.colors.gray} style={style.icon}/>
                )}
            </TouchableOpacity>
                             
              
              </View> 
        </Fragment>
    )
})
