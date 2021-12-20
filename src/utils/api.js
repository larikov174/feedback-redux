function api() {
  const baseUrl = 'https://feedback-express-app.herokuapp.com'
  const handleResponse = (res) => {
    const answer = res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`);
    return answer;
  };

  return {
    loadPosts() {
      return fetch(`${baseUrl}/posts`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(handleResponse);
    },
    createPost(post) {
      console.log(post);
      return fetch(`${baseUrl}/posts`, {
        method: "POST",
        headers: {
          Accept: "/",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: post.title,
          category: post.category,
          description: post.description,
          status: post.status,
        }),
      }).then(handleResponse);
    },
    updatePost({ title, category, description, status, id }) {
      return fetch(`${baseUrl}/posts/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category,
          description,
          status,
        }),
      }).then(handleResponse);
    },
    deletePost(postId) {
      return fetch(`${baseUrl}/posts/${postId}`, {
        method: "DELETE",
      }).then(handleResponse);
    },
    likePost(postId) {
      return fetch(`${baseUrl}/posts/${postId}/upvotes`, {
        method: "PUT",
      }).then(handleResponse);
    },
    dislikePost(postId) {
      return fetch(`${baseUrl}/posts/${postId}/upvotes`, {
        method: "DELETE",
      }).then(handleResponse);
    },
  };
}

export default api;
