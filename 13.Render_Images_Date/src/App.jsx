import "./App.css";
import demoPic from "./assets/img/Cho1.png";

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const wellCome = ["React JS", "React Native", "Flutter", "Node JS"];

function ranDomTitle() {
  return wellCome[Math.floor(Math.random() * wellCome.length)];
}

const name = "Tô Phạm Thành Đạt";
let isLogedIn = true;
let person = {
  name: "Đạt",
  age: 22,
  email: "daotp150201@gmail.com",
  address: "Hà Nội",
};

function Header() {
  const hehe = ranDomTitle();
  return (
    <>
      <h1>{hehe}</h1>
      <p>
        Hôm nay là: <strong>{today}</strong>. Thời gian hiện tại là:{" "}
        <strong>{time}</strong>
      </p>
    </>
  );
}

function DinamicValue() {
  return (
    <>
      <h2>{name}</h2>
      <p>Kết quả : {1 + 3}</p>
      {/* chèn được thẻ, biểu thức nhưng không chèn được câu lệnh */}
      <p>{isLogedIn ? "Bạn đã đăng nhập" : "Chưa đăng nhập"}</p>
      <p>
        Tên: {person.name}, Tuổi: {person.age}, Email: {person.email}, Địa chỉ:{" "}
        {person.address}
      </p>
      {/* chèn ảnh */}
      <img src={demoPic} alt="" />
    </>
  );
}

function App() {
  return (
    <>
      <Header></Header>
      <DinamicValue />
    </>
  );
}

export default App;
