import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import { useState, useEffect } from "react";
import axios from "axios";

import { useNavigation } from "@react-navigation/native";

const Register = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const submit = () => {
    //     const userData = {
    //         name: name,
    //         email: email,
    //         password: password
    //     }
    //     if (!name || !email || !password) {
    //         Alert.alert("Fill all fields")
    //     }

    //     axios.post('http://10.0.0.2:5001/register', userData)
    //         .then(response => console.log(response.data))
    //     if (response.data.status == 'ok') {
    //         Alert.alert('Registered Successfull!!');
    //         navigation.navigate('Login');
    //     } else {
    //         Alert.alert(JSON.stringify(response.data));
    //     }
    //     setName('');
    //     setEmail('');
    //     setPassword('');
    // }


    const submit = () => {
        const userData = {
            name: name,
            email: email,
            password: password
        };
    
        if (!name || !email || !password) {
            Alert.alert("Fill all fields");
            return; // Ensure you return early if validation fails
        }
    
        axios.post('http://10.0.0.2:5001/register', userData)
            .then(response => {
                console.log('Response:', response); // Log the entire response object
                console.log('Response Data:', response.data); // Log only the data
    
                if (response.data.status === 'ok') {
                    Alert.alert('Registered Successfully!!');
                    navigation.navigate('Login');
                } else {
                    Alert.alert('Registration Failed: ' + JSON.stringify(response.data));
                }
    
                setName('');
                setEmail('');
                setPassword('');
            })
            .catch(error => {
                console.error('Error:', error); // Log the error
                Alert.alert('An error occurred. Please try again.');
            });
    };
    


    return (
        <View>

            <View style={styles.formBg}>

                <Text style={styles.heading}>Sign up</Text>

                <TextInput
                    style={{ borderColor: 'grey', borderBottomWidth: 1, padding: 14 }}
                    placeholder="Full Name"
                    onChangeText={text => setName(text)}
                    value={name}
                />

                <TextInput
                    style={{ borderColor: 'grey', borderBottomWidth: 1, padding: 14 }}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />

                <TextInput
                    style={{ borderColor: 'grey', borderBottomWidth: 1, padding: 14 }}
                    placeholder="Password"
                    onChangeText={text => setPassword(text)}
                    value={password}
                />

                <Text style={{ marginVertical: 40, textAlign: 'center' }}>By Signing up, you are agreeing to our Terms & Conditions</Text>

                <Pressable
                    onPress={submit}
                >
                    <Text style={styles.button}>Signup</Text>
                </Pressable>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formBg: {
        marginVertical: 40,
        marginHorizontal: 15,
    },
    heading: {
        marginBottom: 10,
        marginLeft: 10,
        alignItems: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    button: {
        backgroundColor: 'darkgreen',
        margin: 10,
        padding: 10,
        height: 50,
        textAlign: 'center',
        borderRadius: 40,
        fontSize: 20,
        color: 'white',
    }
}
)
export default Register;