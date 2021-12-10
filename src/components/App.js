import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Main } from "./Main";
import { Empty } from "./Empty";
// import { Card } from "./Card";
import { CommentsContainer } from "./CommentsContainer";
import { EditComment } from "./EditComment";
import { Footer } from "./Footer";
import api from "../utils/api";

// import { Hamburger } from "./components/hamburger/Hamburger";

function App() {
  let navigate = useNavigate();
  const { loadCards } = api();
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const onStartGetData = () => {
    loadCards()
      .then((res) => setCards(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (cards !== []) {
      onStartGetData();
    }
    // eslint-disable-next-line
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    navigate(`/comments`)
  };

  return (
    <div className="page">
      <Routes>
        <Route index
          element={cards !== [] ? <Main data={cards} onCardClick={handleCardClick} /> : <Empty />} />
        <Route path="/comments" element={<CommentsContainer data={selectedCard} />} />
        <Route path="/edit" element={<EditComment data={selectedCard} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
