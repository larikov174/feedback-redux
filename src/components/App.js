import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Menu } from "./Menu";
import { ControlBar } from "./ControlBar";
import { PostsContainer } from "./PostsContainer";
import { Empty } from "./Empty";
import { CommentsContainer } from "./CommentsContainer";
import { EditPost } from "./EditPost";
import { AddPost } from "./AddPost";
import { Footer } from "./Footer";
import api from "../utils/api";
import { useAtom } from "jotai";
import { useAtomValue } from 'jotai/utils'
import { Posts, SelectedPost } from "../atoms/Atoms";

function App() {
  const navigate = useNavigate();
  const { loadPosts, updatePost, createPost, likePost, dislikePost, deletePost } = api();
  const [initPosts, setInitPosts] = useAtom(Posts);
  const selectedPost = useAtomValue(SelectedPost);
  const onLoadInitData = () => {
    loadPosts()
      .then((res) => setInitPosts(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    onLoadInitData();
    // eslint-disable-next-line
  }, []);

  const handlePostEdit = (post) => {
    updatePost(post)
      .then(() => navigate(`/`))
  }

  const handlePostSubmit = (post) => {
    createPost(post)
      .then(() => navigate(`/`))
  }

  const handleVote = (post) => {
    console.log(post);
    const condition = post.upvotes.some(voteId => voteId === "61b10988f80a6a283ac08d52")
    return condition
      ? dislikePost(post._id)
      : likePost(post._id)
  }

  const handlePostDelete = (id) => {
    deletePost(id)
  }

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={initPosts !== [] ?
          <article className="main">
            <Menu />
            <ControlBar />
            <PostsContainer onVote={handleVote} />
          </article>
          : <Empty />
        }>
          <Route path="category/:category" element={<PostsContainer onVote={handleVote} />} />
        </Route>
        <Route path="comments" element={<CommentsContainer data={selectedPost} />} />
        <Route path="edit" element={<EditPost postToEdit={selectedPost} onEditPost={handlePostEdit} onDelete={handlePostDelete} />} />
        <Route path="add" element={<AddPost onSubmitPost={handlePostSubmit} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
