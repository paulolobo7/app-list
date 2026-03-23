import React from "react";

import { Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from "react-native"
import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { MaterialIcons, Octicons } from '@expo/vector-icons'
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { router} from "expo-router";
import { useNavigation, NavigationProp } from "@react-navigation/native";



export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation<NavigationProp<any>>();

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        return alert('Preencha todos os campos')
      }

      navigation.navigate('BottomRoutes');

      setTimeout(() => {
        if (email === 'lobo@gmail.com' && password === 'admin') {
          alert('Login realizado com sucesso!')
          router.push('/work-list');
        } else {
          alert('Email ou senha incorretos!')
        }
        setLoading(false);
      }, 3000);


    } catch (error) {
      console.log(error)
    }finally {
      setLoading(false);
    }
  }
  return (
    <>
    <View style={style.container}>
      <View style={style.boxTop}>

        <Image source={Logo}
          style={style.logo}
          resizeMode="contain" />

        <Text style={style.text}>bem-vindo de volta!</Text>

      </View>
      
      <View style={style.boxMid}>

        <Input
          value={email}
          onChangeText={setEmail}
          title="EMAIL"
          IconRight={MaterialIcons}
          iconRightname="email"
          
        />
        <Input
          value={password}
          onChangeText={setPassword}
          title="SENHA"
          IconRight={Octicons}
          iconRightname={showPassword?"eye-closed":"eye"}
          secureTextEntry={showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}   
          
        />
        
      </View>  

      <Button
        text="ENTRAR"
        onPress={getLogin}
        loading={loading}
      />
      

      <Text style={style.textBottom}>Não tem conta?
        <Text style={{ color: themes.colors.primary }}>Cadastre-se</Text>
      </Text>
    </View>
    </>
  )
}



