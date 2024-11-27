import React from 'react'
import '../styles/feed.css'

export default function Feed() {



    return (
        <div className="feed-container">
            <header className="header">
                <h1>Post Feed</h1>
            </header>
            <main className="feed">
                <div className="post">
                    <img src="https://via.placeholder.com/150" alt="Post Image" className="post-image" />
                    <div className="post-content">
                        <h2 className="post-title">Post Title 1</h2>
                        <p className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac
                            ligula eget sapien aliquet scelerisque.</p>
                    </div>
                </div>
                <div className="post">
                    <img src="https://via.placeholder.com/150" alt="Post Image" className="post-image" />
                    <div className="post-content">
                        <h2 className="post-title">Post Title 2</h2>
                        <p className="post-description">Aliquam vestibulum, eros id aliquam rhoncus, orci ligula egestas lectus,
                            at sodales urna justo ut risus.</p>
                    </div>
                </div>
                <div className="post">
                    <img src="https://via.placeholder.com/150" alt="Post Image" className="post-image" />
                    <div className="post-content">
                        <h2 className="post-title">Post Title 3</h2>
                        <p className="post-description">Curabitur sed arcu sit amet massa gravida sodales. Donec vehicula metus
                            nec ante commodo, id tincidunt sem porttitor.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
