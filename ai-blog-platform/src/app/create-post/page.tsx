'use client'

import { useEffect, useState } from 'react'

export default function Home() {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [authorId, setAuthorId] = useState('') // manually input authorId for now

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const res = await fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content, authorId }),
        })

        const newPost = await res.json()
        setPosts(prev => [newPost, ...prev])
        setTitle('')
        setContent('')
    }

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-4">AI Blog Posts</h1>

            <form onSubmit={handleSubmit} className="mb-6 space-y-2">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="border px-2 py-1 w-full"
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className="border px-2 py-1 w-full"
                />
                <input
                    type="text"
                    placeholder="Author ID"
                    value={authorId}
                    onChange={e => setAuthorId(e.target.value)}
                    className="border px-2 py-1 w-full"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Post
                </button>
            </form>

            {posts.map((post: any) => (
                <div key={post.id} className="border p-4 mb-4 rounded">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p>{post.content}</p>
                    <p className="text-sm text-gray-500">By {post.author?.name || post.authorId}</p>
                </div>
            ))}
        </main>
    )
}
