import { useState } from "react";
import Section from "./components/MainContent/Section.jsx";
import Header from "./components/Header/Header.jsx";
import { myData, EXAMPLES } from "../data.js";
import MainContent from "./components/MainContent/MainContent.jsx";
import TabButton from "./components/TabButton.jsx";
function App() {
  const kq = myData.map((item) => ({ ...item }));
  console.log(kq);

  useState();
  console.log("app dc gọi");
  const [selectedTopic, setSelectedTopic] = useState(); //update state
  const currentHour = new Date().getHours();
  function chaoBuoi() {
    if (currentHour < 12) {
      return "Chào buổi sáng";
    } else if (currentHour < 18) {
      return "Chào buổi chiều";
    } else {
      return "Chào buổi tối";
    }
  }
  function handleSelect(selectButton) {
    setSelectedTopic(selectButton);
  }

  // function createHandler(buttonName) {
  //   return function () {
  //     handleSelect(buttonName);
  //   };
  // }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            {/* <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} /> */}
            {myData.map((item) => (
              <MainContent key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <Section title="Examples" id="examples" classname="demo class">
          {/* prettier-ignore */}
          <menu>
            <TabButton 
            isSelected={selectedTopic === `components`}
            onSelect={()=>{handleSelect(`components`);}}>Components</TabButton>
            <TabButton 
            isSelected={selectedTopic === `jsx`}
            onSelect={()=>{handleSelect(`jsx`);}}>JSX</TabButton>
            <TabButton 
            isSelected={selectedTopic === `props`} onSelect={()=>{handleSelect(`props`);}}>Props</TabButton>
            <TabButton isSelected={selectedTopic === `state`} onSelect={()=>{handleSelect(`state`);}}>State</TabButton>
            <TabButton onSelect={()=>{handleSelect(chaoBuoi());}}>Chào</TabButton>    
            {/* <TabButton onSelect={createHandler('Components')}>Components</TabButton>
            <TabButton onSelect={createHandler('JSX')}>JSX</TabButton>
            <TabButton onSelect={createHandler('Props')}>Props</TabButton>
            <TabButton onSelect={createHandler('State')}>State</TabButton>  */}
          </menu>
          {!selectedTopic ? (
            <p>Vui lòng chọn một tab để xem examples!</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].desc}</p>

              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}

          {selectedTopic}
        </Section>
      </main>
    </>
  );
}

export default App;
