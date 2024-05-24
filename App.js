import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement validation and API calls for secure authentication
    // Replace with appropriate logic based on your backend system
    console.log('Sign in clicked! Email:', email, 'Password:', password);
  };

  const handleCreateAccount = () => {
    // Implement navigation logic to go to create account page
    // Replace with appropriate navigation based on your chosen library
    console.log('Create account clicked!');
  };

  return (
    <View style={styles.container}>
      {/* Semi-circle shape */}
      <View style={styles.semiCircle} />
      
      <Text style={styles.heading}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email Address</Text>
        <TextInput
          style={[styles.input, { color: '#000000' }]}
          value={email}
          onChangeText={setEmail}
          placeholder="example@example.com"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="#BCBCBC"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={[styles.input, { color: '#000000' }]}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="#BCBCBC"
        />
      </View>
      <TouchableOpacity onPress={handleSignIn} style={styles.buttonContainer}>
        <Text style={[styles.buttonText, { color: '#fff' }]}>Sign In</Text>
      </TouchableOpacity>

      
      <View style={styles.createButtonContainer}>
      <Text style={styles.inputLabel}>Don't have an account ?</Text>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={[styles.createButtonText, { color: '#7DDAC4' }]}>SignUp & Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'linear-gradient(to bottom,#171233, #3B3170 ,#271F4F)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  semiCircle: {
    width: '100%',
    height: 200,
    borderRadius: '50px 50px 0 0', // Creates a semicircle shape
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light black color with transparency
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    transform: [{ scaleX: 2 }],
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  heading: {
    fontSize: 26,
    marginBottom: 20,
    color: '#EDEDDD',
  },
  inputContainer: {
    marginBottom: 20,
    width: '80%',

  },
  inputLabel: {
    color: '#EDEDDD',
    marginBottom: 5,
  },
  input: {
    height: 40,
    padding: 10,
    fontSize: 16,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderColor: '#fff',
    borderWidth: 1,
    width: '100%',
    color: '#000000', // text color
  },
  buttonContainer: {
    width: '80%',
    padding: 15,
    backgroundColor: 'rgba(205,198,231,0.12)',
    borderWidth: 1,
    borderColor: '#fff', // Change border color to white
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
  },
  createButtonContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  createButtonText: {
    fontSize: 14,
  },
});

export default Login;
