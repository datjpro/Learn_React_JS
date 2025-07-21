const user = {
  //thuoc tinh
  name: "Nam",
  age: 23,
  "giới tính": "Nam",
  //phuong thức
  xinChao() {
    console.log("Hello World");
  },
};
console.log(user);
console.log("tên của đối tượng user: ", user.name);
console.log(user["giới tính"]); //bracket notation

//class
class User {
  constructor(name, age) {
    this.ten = name;
    this.tuoi = age;
  }
  //phuong thuc
  xinChao() {
    console.log("Hello World");
  }
}

const us1 = new User("Nữ", 21);
console.log(us1.ten);
console.log(us1.tuoi);

const us2 = new User("Trung", 71);
console.log(us2.ten);
console.log(us2.tuoi);
console.log(us2.xinChao());
