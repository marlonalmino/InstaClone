import React, { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from "react-native"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"

export default props => {
    // States
    const [image, setImage] = useState(null)
    const [comment, setComment] = useState('')

    const pickImage = () => {
        launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                setImage({ uri: res.assets[0].uri, base64: res.assets[0].base64 })
            }
        })
    }

    const pickPhoto = () => {
        launchCamera({
            mediaType: 'photo',
            includeBase64: true,
            saveToPhotos: true,
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                setImage({ uri: res.assets[0].uri, base64: res.assets[0].base64 })
            }
        })
    }

    const save = () => {
        Alert.alert('Imagem adicionada!', comment)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe uma imagem</Text>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={pickPhoto} style={styles.button}>
                        <Text style={styles.buttonText} >Tirar uma foto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pickImage} style={styles.button} >
                        <Text style={styles.buttonText} >Escolha a foto</Text>
                    </TouchableOpacity>
                </View>
                <TextInput placeholder="Algum comentário para a foto?"
                    style={styles.input} value={comment}
                    onChangeText={setComment} />
                <TouchableOpacity onPress={save} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    buttonRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
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
        width: '90%'
    },
})