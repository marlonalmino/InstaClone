import React from 'react'
import { View, Text } from 'react-native'

import Header from './src/components/Header'
import Post from './src/components/Post'

export default props => {
  const comments = [{
    nickname: 'Dayane Lima',
    comment: 'Excelente Foto!'
  }, {
    nickname: 'Juan Manuel',
    comment: 'Tá desfocada! Faço melhor...'
  }]

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
    </View>
  )
}