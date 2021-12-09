import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Menu } from "./Menu";
import { ControlBar } from "./ControlBar";
import { Empty } from "./Empty";
import { Footer } from "./Footer";
import { FeedCards } from "./FeedCards";
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
    navigate(`/${card._id}`)
    console.log(card);

  };

  return (
    <div className="page">
      <article className="main">
        <Menu />
        <ControlBar cards={cards} />
        <Routes>
          <Route
            index
            element={cards !== [] ? <FeedCards cards={cards} onCardClick={handleCardClick}/> : <Empty />}
          />
          <Route path="/comment" element={<Empty />} />
        </Routes>
      </article>
      <Footer />
    </div>
  );
}

export default App;
