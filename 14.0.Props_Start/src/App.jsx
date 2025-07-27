import logo from "./assets/logo-tuhoc.png";
import PropTypes from "prop-types";

import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";

function MainContent(props) {
  return (
    <>
      <li>
        <img src={props.img} alt={props.titel} />
        <h2>{props.titel}</h2>
        <p>{props.desc}</p>
      </li>
    </>
  );
}

MainContent.propTypes = {
  img: PropTypes.string.isRequired,
  titel: PropTypes.string.isRequired,
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
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent
              img={pic1}
              titel="Components"
              desc="Khối xây dựng giao diện cơ bản - kết hợp nhiều thành phần để tạo nên ứng dụng."
            />
            <MainContent
              img={pic2}
              titel="JSX"
              desc="Kết hợp HTML và JavaScript để tạo giao diện động và mạnh mẽ."
            />
            <MainContent
              img={pic3}
              titel="Props"
              desc="Truyền dữ liệu vào thành phần để làm nó linh hoạt và tái sử dụng."
            />
            <MainContent
              img={pic4}
              titel="State"
              desc="Dữ liệu được React quản lý, khi thay đổi sẽ tự động làm mới giao diện."
            />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
