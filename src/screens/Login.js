import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

import useUser from '../data/hooks/useUser'

export default props => {
    // States
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useUser()

    const onLogin = () => {
        login(email, password)
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='E-mail' style={styles.input}
                autoFocus={true} keyboardType='email-address'
                value={email} onChangeText={setEmail} />
            <TextInput placeholder='Senha' style={styles.input}
                secureTextEntry={true} value={password}
                onChangeText={setPassword} />

            <TouchableOpacity onPress={onLogin} 
                style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => props.navigation.navigate('Register') } style={styles.button}>
                <Text style={styles.buttonText}>Criar nova conta...</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    }
})