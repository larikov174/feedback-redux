import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Main } from "./Main";
import { Empty } from "./Empty";
import { CommentsContainer } from "./CommentsContainer";
import { EditPost } from "./EditPost";
import { AddPost } from "./AddPost";
import { Footer } from "./Footer";
import api from "../utils/api";

// import { Hamburger } from "./components/hamburger/Hamburger";

function App() {
  let navigate = useNavigate();
  const { loadPosts, updatePost, createPost, likePost, dislikePost, deletePost } = api();
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const onLoadInitData = () => {
    loadPosts()
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (posts !== []) {
      onLoadInitData();
    }
    // eslint-disable-next-line
  }, []);

  const handlePostSelect = (post) => {
    setSelectedPost(post);
    navigate(`/comments`)
  };

  const handlePostEdit = (post) => {
    updatePost(post)
      .then(() => navigate(`/`))
  }

  const handlePostSubmit = (post) => {
    createPost(post)
      .then(() => navigate(`/`))
  }

  const handleVote = ({ upvotes, id }) => {
    return upvotes.some(voteId => voteId === "61b10988f80a6a283ac08d52")
      ? dislikePost(id)
      : likePost(id)
  }

  const handlePostDelete = (id) => {
    deletePost(id)
  }

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={posts !== [] ? <Main data={posts} onPostClick={handlePostSelect} onVote={handleVote} /> : <Empty />} />
        <Route path="comments" element={<CommentsContainer data={selectedPost} />} />
        <Route path="edit" element={<EditPost postToEdit={selectedPost} onEditPost={handlePostEdit} onDelete={handlePostDelete} />} />
        <Route path="add" element={<AddPost onSubmitPost={handlePostSubmit} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
