import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = async () => {
    // Implement your sign-up logic here (validation, API call, etc.)
    // ... your code here ...
  };

  return (
    <View style={styles.container}>
      {/* Semicircle */}
      <View style={styles.semicircle} />

      {email}
      <Text style={styles.title}>Sign Up</Text>
      {/* Password Input */}
      <Text style={styles.heading}>Email Address</Text>      

      <TextInput
        style={styles.input}

        placeholder="Enter your email..."
        keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
            keyboardType="phone-pad"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
      />
      <Text style={styles.heading2}>Password</Text>      

      <TextInput
        style={styles.input}
       placeholder="Enter your password..."
            secureTextEntry
            onChangeText={setPassword}
            value={password}
      />
            <Text style={styles.heading3}>Password Confirmation</Text>      

      <TextInput
        style={styles.input}
       placeholder="Confirm your password..."
            secureTextEntry
            onChangeText={setConfirmPassword}
            value={confirmPassword}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up —></Text>
      </TouchableOpacity>
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
  semicircle: {
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
  title: {
    fontSize: 24,
    color: '#EDEDDD',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 200,
  },
  input: {
    width: '95%',
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: '40px',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgba(205, 198, 231, 0.12)', // Apply color with opacity
    border: '1px solid white',
    width: '95%',
    padding: 15,
    borderRadius: '40px',
    marginBottom: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 100,
  },
heading: {
    fontSize: 15,
    color: '#EDEDDD',
    fontWeight: 'bold',
    left: -80,
    padding: 10, 
  },
heading2: {
    fontSize: 15,
    color: '#EDEDDD',
    fontWeight: 'bold',
    left: -100,
    padding: 5,
  },
  heading3: {
    fontSize: 15,
    color: '#EDEDDD',
    fontWeight: 'bold',
    left: -50,
    padding: 5,
  },
});

export default SignUpPage;