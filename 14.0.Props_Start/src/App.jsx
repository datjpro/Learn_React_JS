import logo from "./assets/logo-tuhoc.png";
import PropTypes from "prop-types";

import { myData } from "../data.js";

function MainContent({ img, title, desc }) {
  return (
    <>
      <li>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
      </li>
    </>
  );
}

MainContent.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Tự Học" />
        <h1>React JS SIU</h1>
        <p>
          Học React - Khám phá cách xây dựng ứng dụng linh hoạt, hiện đại, và
          đầy sáng tạo!
        </p>
      </header>
    </>
  );
}

function App() {
  // console.log(myData[0].img);

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent {...myData[0]} />
            {/* <MainContent
              img={myData[1].img}
              titel={myData[1].title}
              desc={myData[1].desc}
            /> */}
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
