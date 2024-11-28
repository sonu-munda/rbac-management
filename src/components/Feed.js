import React from 'react'
import '../styles/feed.css'

export default function Feed() {

    const feeds = [
        {
            id: 1,
            userId: 3,
            author: 'Sonu Munda',
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Post Title 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer acligula eget sapien aliquet scelerisque.'
        },
        {
            id: 2,
            userId: 3,
            author: 'Sonu Munda',
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Post Title 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer acligula eget sapien aliquet scelerisque.'
        },
        {
            id: 3,
            userId: 4,
            author: 'Anonymous',
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Post Title 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer acligula eget sapien aliquet scelerisque.'
        },
        {
            id: 4,
            userId: 4,
            author: 'Anonymous',
            imageUrl: 'https://via.placeholder.com/150',
            title: 'Post Title 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer acligula eget sapien aliquet scelerisque.'
        },
    ]
    return (
        <div className="feed-container">
            <header className="header">
                <h1>Post Feed</h1>
            </header>
            <main className="feed">
                {feeds.map(post => <div className="post">
                    <img src={post.imageUrl} alt="Post Image" className="post-image" />
                    <div className="post-content">
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-description">{post.description}</p>
                        <span className='post-author'>~{post.author}</span>
                    </div>
                    <div className='post-icons-container'>
                        <img src='edit.png' alt="Post Image" className="post-image" />
                        <img src='bin.png' alt="Post Image" className="post-image" />
                    </div>
                </div>)}
            </main>
        </div>
    )
}
