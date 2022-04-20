import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Post from "./components/Post";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  // change Page
  const paginate = (num) => setCurrentPage(num);
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPost()

  }, [])
  // Get Current Post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className="container">
      <header className="text-primary my-5">
        <h1>My Blog Pagination App</h1>
      </header>
      <div className="">
        <Post posts={currentPosts} loading={loading} />
        <div className="row">
          <div className="col-sm">
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
