import React from "react";
import { Menu } from "./components/Menu";
import { ControlBar } from "./components/ControlBar";
import { Empty } from "./components/Empty";
import { Footer } from "./components/Footer";
import { FeedCards } from "./components/FeedCards";
// import { Hamburger } from "./components/hamburger/Hamburger";

function App() {
  return (
    <div className="page">
      <article className="main">
        <Menu />
        <ControlBar />
        <FeedCards />
        <Empty />
      </article>
      <Footer />
    </div>
  );
}

export default App;

