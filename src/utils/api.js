function api() {
  const handleResponse = (res) => {
    const answer = res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`);
    return answer;
  };

  return {
    loadCards() {
      return fetch('./data.json', {
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
