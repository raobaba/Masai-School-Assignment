import React from 'react';
import useFetch from './useFetch';

function PostsList() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Posts List</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
