let arr1 = [];

const traiCay = ["Xoài", "Táo", "Nho", "Nhãn", "Táo"];
console.log(typeof traiCay);
console.log(traiCay);

const mang = ["hello", 12, true, undefined, [1, 2, 3, 4, 5]];
console.log(mang);
console.log(mang[4][1]);

//phuong thuc thuong dùng
traiCay.push("Mận");
console.log(traiCay);

//map
const so = [1, 2, 3, 4, 5, 6];
console.log(so);
const so2 = so.map((item) => item * 2);
console.log(so2);

// chuyển đổi mảng bang đầu thành đối tượng mới
const so3 = so.map((item) => ({ so: item }));
console.log(so3);

//tìm index
const kq = traiCay.findIndex((item) => {
  return item === "Táo";
});
console.log(kq);

//bai tap them
const themThan = traiCay.map((item) => item + " !");
console.log(themThan);
