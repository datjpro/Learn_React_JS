import Header from "./components/Header/Header.jsx";
import { myData } from "../data.js";
import MainContent from "./components/MainContent/MainContent.jsx";

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
