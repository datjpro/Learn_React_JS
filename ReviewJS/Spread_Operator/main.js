let soThich = ["Đọc sách", "Nghe nhạc"];
let soThichMoi = ["Đi Bi-a", "Xem phim"];

soThich = [...soThich, "Siu", ...soThichMoi];
console.log("Danh sách sở thích sau khi thêm: ", soThich);
// operator với object
let user = {
  name: "Nguyễn Văn A",
  age: 20,
  address: "Hà Nội",
};

let update = {
  gioiTinh: "Nam",
  dtb: 8.5,
};

user = { ...user, ...update };
console.log("Danh sách sau khi thêm: ", user);
