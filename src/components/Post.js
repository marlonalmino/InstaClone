import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'

import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

import useUser from '../data/hooks/useUser'

export default props => {
    const { email } = useUser()

    const addComment = email
        ? <AddComment postId={props.id} />
        : null

    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.image} />
            <Author email={props.email} 
                nickname={props.nickname} />
            <Comments comments={props.comments} />
            { addComment }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})