import React from 'react';

const Post = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>
  }

  return (
    <ul className="list-group my-4">
      {posts.map(post => (
        <li key={post.id.toString()} className="list-group-item text-center">{post.title}</li>
      ))}
    </ul>
  )
}

export default Post;