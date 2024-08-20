import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Input } from '@rneui/themed';

export default function CreateAccount({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [result, setResult] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateAccount = () => {
    setResult('');
    if (password !== confirmPassword) {
      setResult('As senhas não coincidem!');
      return;
    }
    
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Image style={styles.logo} source={require('../assets/logoMarca_SISGEPS.png')} resizeMode="contain" />
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.instrution}>
          Preencha os dados para criar sua conta SisGeps
        </Text>

        <View style={styles.form}>
          <Text style={styles.titleTop}>Criar Conta</Text>
          <Text style={{ color: 'red' }}>{result}</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.textLabel}>Nome</Text>
            <Input
              style={styles.textInput}
              inputStyle={{ backgroundColor: '#f3f3f3' }}
              placeholder='Informe o seu Nome'
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.textLabel}>Nome da Empresa</Text>
            <Input
              style={styles.textInput}
              inputStyle={{ backgroundColor: '#f3f3f3' }}
              placeholder='Informe o nome da Empresa'
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.textLabel}>E-mail</Text>
            <Input
              style={styles.textInput}
              inputStyle={{ backgroundColor: '#f3f3f3' }}
              placeholder='Informe o seu email'
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.textLabel}>Senha</Text>
            <Input
              style={styles.textInput}
              inputStyle={{ backgroundColor: '#f3f3f3' }}
              placeholder='Informe a sua senha'
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.textLabel}>Confirmar Senha</Text>
            <Input
              style={styles.textInput}
              inputStyle={{ backgroundColor: '#f3f3f3' }}
              placeholder='Confirme a sua senha'
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.buttonCreate}>
            <TouchableOpacity
              style={styles.customButton}
              onPress={handleCreateAccount}>
              <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Seja Bem-Vindo!</Text>
            <Text>Conta criada com sucesso!</Text>
            <TouchableOpacity onPress={handleCloseModal} style={styles.dialogButton}>
              <Text style={styles.dialogButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
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
    height: '70%',
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
  textLabel: {
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
  buttonCreate: {
    width: '88%',
    height: '12%',
    alignItems: 'flex-end'
  },
  customButton: {
    width: 120,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dialogButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#1877F2',
    borderRadius: 5,
    alignItems: 'center',
  },
  dialogButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
