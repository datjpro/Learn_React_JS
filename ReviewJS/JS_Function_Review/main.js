function xinchao() {
  console.log("xin chào hẹ hẹ hẹ");
}
xinchao();

function xinchao2(userName = "No Name") {
  console.log("xin chào " + userName);
}
xinchao2("Hà Nội");
xinchao2();
let us1 = prompt("Nhập tên của bạn");
xinchao2(us1);

function tich(a, b) {
  return a * b;
}
let tich1 = tich(10, 10);
console.log(tich1);

function tong(a, b) {
  return a + b;
}
let tong1 = tong(10, 10);
console.log(tong1);

//function expression
let ftich = function (a, b) {
  return a * b;
};
console.log(ftich(10, 10));
let kq = ftich(10, 11);
console.log(kq);
