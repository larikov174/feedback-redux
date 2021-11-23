import React from "react";
import { Header } from "./components/header/Header";
// import { FeedbackBanner } from "./components/feedbackBanner/FeedbackBanner";
// import { TagArea } from "./components/tagArea/TagArea";
// import { Roadmap } from "./components/roadmap/Roadmap";
// import { Hamburger } from "./components/hamburger/Hamburger";
// import { EmptyFeed } from "./components/emptyFeed/EmptyFeed";

function App() {
  return (
    <div className="page">
      <article className="container-main">
        <section className="menu">
          {/* первый квадрат и заголовок */}
          <Header />

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
//   <Roadmap />
// </section>
// {/* гамбургер */}
// <Hamburger />
// {/* синяя шапка с сротировкой фидов */}
// <FeedbackBanner />
// {/* пустая страцина без фидбэков */}
// <EmptyFeed />
// </article>

