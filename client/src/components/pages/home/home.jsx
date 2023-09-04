import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../header/header";
import Posts from "../../posts/posts";
import Sidebar from "../../sidebar/sidebar";
import { useLocation } from "react-router";

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts"+search);  //search is used to get post using name of the poster
        console.log(res.data)
        setPosts(res.data);
      } catch (err) {
        setError(err.message); // Set an error message in case of an error
      }
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <Posts posts={posts} />
            <Sidebar />
          </>
        )}
      </div>
    </>
  );
}

export default Home;
