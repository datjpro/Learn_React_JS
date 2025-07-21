const userNames = ["Toàn", "Hà", "Huy"];
const user1 = userNames[0];
const user2 = userNames[1];
const user3 = userNames[2];
console.log(user1);
console.log(user2);
console.log(user3);

const [user4, user5, user6] = userNames;
console.log(user4, user5, user6);

//bo qua pt khong can thiết
const [us7, , us9] = userNames;
console.log(us7);
console.log(us9);

//khai bao destructuring với giá trị mặc định
const [us10, us11, us12, us13 = "Mai"] = userNames;
console.log(us10, us11, us12, us13);

//destructuring với parameter
const [us14, ...abc] = userNames; //thuong dat ten la rest
console.log(us14);
console.log(abc);

//destructuring với object
const user = {
  name: "Toàn",
  age: 20,
  address: "Ha Noi",
};
const { name, age, address } = user; // tên biến phải trùng với tên của đối tượng
console.log(name, age, address);

const { name: ten1, age: tuoi1, address: diaChi1, gioiTinh = "Nam" } = user; // đổi tên biến
console.log(ten1, tuoi1, diaChi1, gioiTinh);
