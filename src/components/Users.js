
import '../styles/feed.css'

export default function Users() {

    const users = [
        {
            userId: 3,
            name: 'Sonu Munda',
            email: 'sonu@gmail.com',
            role: 'https://via.placeholder.com/150',
            profileImageUrl: 'https://via.placeholder.com/150',
        },
        {
            userId: 2,
            name: 'Anonymous',
            email: 'anym@gmail.com',
            role: 'https://via.placeholder.com/150',
            profileImageUrl: 'https://via.placeholder.com/150',
        },
    ]
    console.log(users)
    return (
        <div className="feed-container">
            <header className="header">
                <h1>Users</h1>
            </header>
            <main className="feed users">
                {
                    users.map((u) =>
                        <div key={u.userId} className="post">
                            <div className="post-content">
                                <h2 className="post-title">{u.name}</h2>
                                <h2 className="post-description">{u.email}</h2>
                            </div>
                            <div className='post-icons-container'>
                                <img src='edit.png' alt="Post Image" className="post-image" />
                                <img src='bin.png' alt="Post Image" className="post-image" />
                            </div>
                        </div>
                    )
                }
            </main>
        </div>
    )
}
