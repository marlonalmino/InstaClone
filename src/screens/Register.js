import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export default props => {
    // States
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <TextInput placeholder='Nome' style={styles.input}
                autoFocus={true} value={name}
                onChangeText={setName} />
            <TextInput placeholder='E-mail' style={styles.input}
                keyboardType='email-address' value={email}
                onChangeText={setEmail} />
            <TextInput placeholder='Senha' style={styles.input}
                secureTextEntry={true} value={password}
                onChangeText={setPassword} />
            <TouchableOpacity onPress={ () => {} } style={styles.button} >
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286F4'
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
        paddingLeft: 15
    }
})