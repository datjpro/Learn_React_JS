//doi tuong đơn hàng
const donHang = {
  maDon: 123,
  tienTe: "VNĐ",
  tongTien: 321000,
};
const donHang2 = {
  maDon: 2,
  tienTe: "VNĐ",
  tongTien: 123000,
};

//khong su dung destructuring
function xuLyDon(a) {
  let maDon = a.maDon;
  let tienTe = a.tienTe;
  let tongTien = a.tongTien;
  console.log(`Ma don hang la: ${maDon}`);
  console.log(`Tien te la: ${tienTe}`);
  console.log(`Tong tien la: ${tongTien}`);
}
console.log(xuLyDon(donHang));

// su dung destructuring
function xuLyDon2({ maDon, tienTe, tongTien, hehe = "Siuuu" }) {
  console.log(`Ma don hang la: ${maDon}`);
  console.log(`Tien te la: ${tienTe}`);
  console.log(`Tong tien la: ${tongTien}`);
  console.log(`${hehe}`);
}
xuLyDon2(donHang2);
