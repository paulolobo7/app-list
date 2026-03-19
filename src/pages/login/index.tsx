import React from "react";

import { Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from "react-native"
import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons'
import { themes } from "../../global/themes";
import { Input } from "../../components/input";



export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  async function getLogin() {
    try {
      setLoading(true);
      if (!email || !password) {
        return alert('Preencha todos os campos')
      }
      setTimeout(() => {
        if (email === 'lobo@gmail.com' && password === 'admin') {
          alert('Login realizado com sucesso!')
        } else {
          alert('Email ou senha incorretos!')
        }
        setLoading(false);
      }, 3000);


    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={style.container}>
      <View style={style.boxTop}>

        <Image source={Logo}
          style={style.logo}
          resizeMode="contain" />

        <Text style={style.text}>bem-vindo de volta!</Text>

      </View>
      <Input />
      <View style={style.boxMid}>
        
      </View>  

      <View style={style.boxBottom}>
        <TouchableOpacity style={style.button} onPress={getLogin}>
          {loading ?
            <ActivityIndicator color={'#FFFF'} size={"small"} />
            :
            <Text style={style.textButton}>ENTRAR</Text>
          }
        </TouchableOpacity>
      </View>

      <Text style={style.textBottom}>Não tem conta?
        <Text style={{ color: themes.colors.primary }}>Cadastre-se</Text>
      </Text>
    </View>
  )
}



{/* <View style={style.boxInput}>
              <TextInput placeholder="Digite seu email" 
                         style={style.input} value={email} 
                         onChangeText={setEmail}/>
              
              <MaterialIcons name="email" 
                             size={24} 
                             color={themes.colors.gray}/> 
                             
              
              </View>
              
              <Text style={style.titleInput}>SENHA</Text> 
              <View style={style.boxInput}>
              <TextInput placeholder="Digite sua senha" 
                         style={style.input} 
                         value={password} 
                         onChangeText={setPassword}/>

              <MaterialIcons name="remove-red-eye" 
                             size={24} 
                             color={themes.colors.gray}/> 
              </View>

            </View>   */}