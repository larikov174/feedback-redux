import React from "react";
import { Header } from "./components/Header";
import { TagArea } from "./components/TagArea";
import { Roadmap } from "./components/Roadmap";
// import { FeedbackBanner } from "./components/feedbackBanner/FeedbackBanner";
// import { Hamburger } from "./components/hamburger/Hamburger";
// import { EmptyFeed } from "./components/emptyFeed/EmptyFeed";

function App() {
  return (
    <div className="page">
      <article className="main-container">
        <section className="menu">
          <Header />
          <TagArea />
          <Roadmap />
        </section>

      </article>
    </div>
  );
}

export default App;


// <article className="container-main">
// <section className="menu">
//   {/* первый квадрат и заголовок */}
//   <Header />
//   {/* навигация по тегам */}
//   <TagArea />
//   {/* роадмэп данные */}
//   
// </section>
// {/* гамбургер */}
// <Hamburger />
// {/* синяя шапка с сротировкой фидов */}
// <FeedbackBanner />
// {/* пустая страцина без фидбэков */}
// <EmptyFeed />
// </article>

