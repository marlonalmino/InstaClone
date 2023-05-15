import React, { createContext, useState } from 'react'

const FeedContext = createContext({})

export const FeedProvider = ({ children }) => {
    // State
    const [posts, setPosts] = useState([
        {
            id: Math.random(),
            nickname: 'Rafael Pereira Filho',
            email: 'rafaelpf@gmail.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John Ray Sheldon',
                comment: 'Stunning!'
            }, {
                nickname: 'Wesley Andrade',
                comment: 'Foto Massa! Onde foi tirada?'
            }]
        }, {
            id: Math.random(),
            nickname: 'Francisco Leandro Lima',
            email: 'franciscoll@gmail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            comments: []
        }
    ])

    const feedInternalContext = {
        posts,
        addPost: function(post) {
            setPosts(posts.concat(post))
        },
        addComment: function(postId, comment) {
            const postsTemp = posts.map( post => {
                if (post.id === postId) {
                    if (!post.comments) {
                        post.comments = []
                    }
                    post.comments = post.comments.concat( comment )
                }
                return post
            })
            setPosts(postsTemp)
        }
    }


    return (
        <FeedContext.Provider value={feedInternalContext}>
            {children}
        </FeedContext.Provider>
    )
}

export default FeedContext