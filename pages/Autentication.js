import {View, Text, StyleSheet, Image, TouchableOpacity, Platform} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {Input, Button} from '@rneui/themed';
import {useState} from 'react';

export default function Autentication({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Image style={styles.logo} source={require('../assets/logoMarca_SISGEPS.png')} resizeMode="contain"/>
        </View>
      </View>

      <View style={styles.body}>
        <Text
        style={styles.instrution}
        >Faça o login na sua conta e tenha acesso ao estoque e a todas as ferramentas do SisGeps</Text>

        <View style={styles.form}>
          <Text style={styles.titleTop}>Acesse</Text>
        <Text style={{color: 'red'}}>{result}</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.textLabel}>E-mail</Text>
              <Input
                style={styles.textInput}
                inputStyle={{backgroundColor: '#f3f3f3'}}
                placeholder='Informe o seu email'
                onChangeText={setEmail}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.textLabel}>Senha</Text>
              <Input
                style={styles.textInput}
                inputStyle={{backgroundColor: '#f3f3f3'}}
                placeholder='Informe a sua senha'
                onChangeText={setPassword}
                secureTextEntry={true}
              />
              <Text
                style={styles.forgotPassword}
                onPress={()=>{navigation.navigate('Shortly')}}
              >Esqueci minha senha</Text>
            </View>

          <View style={styles.buttonEnter}>
            <TouchableOpacity
            style={styles.customButton}
              onPress={async () =>{
                setResult('')
                if(email === 'suportsisgeps@sisgeps.com' && password === 'senhadificil'){
                  navigation.navigate('Shortly')
                } else {
                  setResult('Email ou senha incorretos!')
                }
              }}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

          </View>
          <Text style={{paddingTop: '5%'}}>Não tem conta? <Text
            style={{color: '#0000FF'}}
            onPress={()=>{navigation.navigate('CreateAccount')}}
          >Criar conta</Text></Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#DCE9E2',
    flex: 1,
  },
  header: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  headerLogo: {
    width: '100%',
    height: '120%',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: '55%'
  },
  body: {
    flex: 9.7,
    width: '100%',
    alignItems: 'center'
  },
  instrution: {
    fontSize: RFValue(18),
    paddingBottom: '3%',
    width: '80%',
    textAlign: 'center',
    color: '#495057',
  },
  form: {
    width: '90%',
    height: '63.5%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  titleTop: {
    fontWeight: 'bold',
    fontSize: RFValue(18)
  },
  inputContainer: {
    width: '95%',
    alignItems: 'flex-start',
  },
  textLabel:{
    paddingLeft: 10,
    paddingBottom: '1%',
    fontSize: RFValue(16),
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: RFValue(16),
    paddingLeft: '3.333%'
  },
  forgotPassword: {
    paddingLeft: 10,
    fontStyle: 'italic',
    color: '#0000FF'
  },
  buttonEnter: {
    width: '88%',
    height:'12%',
    alignItems: 'flex-end'
  },
  customButton: {
    width: 74,
    height: 37.5,
    backgroundColor: '#1877F2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: 500,
    color: 'white'
  },
})