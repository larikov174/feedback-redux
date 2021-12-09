function api() {
  const baseUrl = 'https://feedback-express-app.herokuapp.com'
  const handleResponse = (res) => {
    const answer = res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`);
    return answer;
  };

  return {
    loadCards() {
      return fetch(`${baseUrl}/posts`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(handleResponse);
    },
  };
}

export default api;
