import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Login = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin=()=>{

        navigation.navigate('Register');
    }

    return (
        <View>

            <View style={styles.formBg}>

                <Text style={styles.heading}>Sign In</Text>

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

                <Pressable
                    onPress={handleLogin}
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

export default Login;