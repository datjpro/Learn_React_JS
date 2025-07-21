// Arrow Function
console.log("Arrow Function :");
let ten_ham = (parameters) => {
  //thân hàm
  //return something
};

//cách 1: đầy đủ
let tongVaTich = (a, b) => {
  let tong = a + b;
  let tich = a * b;
  return tong + tich;
};
console.log(tongVaTich(10, 12));

//cách 2: khi chỉ có 1 biểu thức
let tong = (a, b) => a + b;
console.log(tong(10, 11));

//cách 3: khi trả về đối tượng
let person = (ten, tuoi) => ({ "ho va ten": ten, tuoi: tuoi });

console.log(person("Lan", 20));
