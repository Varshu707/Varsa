import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login(navigation) {
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  if (currentScreen === 'Login') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to login</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email-id:"
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Mobile No:"
            style={styles.textInput}
            value={mobile}
            onChangeText={setMobile}
            keyboardType="number-pad"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrentScreen('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (currentScreen === 'Welcome') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Screen!</Text>
        <Text style={{ fontSize: 16, marginVertical: 20 }}>Email: {email}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrentScreen('Login')}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: { padding:50 ,justifyContent: 'center', paddingHorizontal: 20 },
  title: { fontSize: 25, fontWeight: 'bold', color: 'blue', textAlign: 'center', marginBottom: 30 },
  inputContainer: {
    borderColor: 'black',
    borderWidth: 10,
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  textInput: { height: 40 },
  button: { backgroundColor: 'blue', borderRadius: 20, paddingVertical: 12, marginTop: 20 },
  buttonText: { color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 18 },
});
