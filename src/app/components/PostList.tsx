// components/PostList.jsx
'use client'
import React, { useState, useEffect } from 'react';
import { Post } from '../types/Post';

interface PostListProps {
    initialPosts: Post[];
}
const PostList: React.FC<PostListProps> = ({ initialPosts }) => {
    const [posts, setPosts] = useState(initialPosts);

    // You can add client-side logic here for pagination or fetching additional posts
    // This part will run in the client's browser

    return (
        <div className="post-list">
            <h2 className='text-xl'>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;