const mongoose = require("mongoose");
const Product = require("./models/product");

const products = [
  {
    name: "Iphone 12",
    img: "https://images.unsplash.com/photo-1605161702560-995aeda17042?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 10000,
    desc: "The iPhone has made my life easier with school and everyday living. It helps with homework and can translate English to many different languages. The iCalander is just unbelievable in the iPhone. An actual calendar that has an alarm feature alert when you have an event coming up. The iPhone is an easy way to stay connected with the world with twitter, Facebook, etc. while on the go. Smart phones speed up the amount of work done in one day. The app Store is another great feature of the iPhone.",
  },
  {
    name: "Macbook air",
    img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hY2Jvb2slMjBhaXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 20000,
    desc: "The iPhone has made my life easier with school and everyday living. It helps with homework and can translate English to many different languages. The iCalander is just unbelievable in the iPhone. An actual calendar that has an alarm feature alert when you have an event coming up. The iPhone is an easy way to stay connected with the world with twitter, Facebook, etc. while on the go. Smart phones speed up the amount of work done in one day. The app Store is another great feature of the iPhone.",
  },
  {
    name: "Fossil watch",
    img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1YmxvdCUyMHdhdGNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 30000,
    desc: "The iPhone has made my life easier with school and everyday living. It helps with homework and can translate English to many different languages. The iCalander is just unbelievable in the iPhone. An actual calendar that has an alarm feature alert when you have an event coming up. The iPhone is an easy way to stay connected with the world with twitter, Facebook, etc. while on the go. Smart phones speed up the amount of work done in one day. The app Store is another great feature of the iPhone.",
  },
  {
    name: "Helicopter",
    img: "https://images.unsplash.com/photo-1563561686990-f0ef5b3e0b7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVsaWNvcHRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 40000,
    desc: "The iPhone has made my life easier with school and everyday living. It helps with homework and can translate English to many different languages. The iCalander is just unbelievable in the iPhone. An actual calendar that has an alarm feature alert when you have an event coming up. The iPhone is an easy way to stay connected with the world with twitter, Facebook, etc. while on the go. Smart phones speed up the amount of work done in one day. The app Store is another great feature of the iPhone.",
  },
  {
    name: "Motorbike",
    img: "https://images.unsplash.com/photo-1524591652733-73fa1ae7b5ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 50000,
    desc: "The iPhone has made my life easier with school and everyday living. It helps with homework and can translate English to many different languages. The iCalander is just unbelievable in the iPhone. An actual calendar that has an alarm feature alert when you have an event coming up. The iPhone is an easy way to stay connected with the world with twitter, Facebook, etc. while on the go. Smart phones speed up the amount of work done in one day. The app Store is another great feature of the iPhone.",
  },
  {
    name: "Yatch",
    img: "https://images.unsplash.com/photo-1545566239-0b2fb5c50bc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJvYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 60000,
    desc: "The iPhone has made my life easier with school and everyday living. It helps with homework and can translate English to many different languages. The iCalander is just unbelievable in the iPhone. An actual calendar that has an alarm feature alert when you have an event coming up. The iPhone is an easy way to stay connected with the world with twitter, Facebook, etc. while on the go. Smart phones speed up the amount of work done in one day. The app Store is another great feature of the iPhone.",
  },
  {
    name: "Drone",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 70000,
    desc: "The iPhone has made my life easier with school and everyday living. It helps with homework and can translate English to many different languages. The iCalander is just unbelievable in the iPhone. An actual calendar that has an alarm feature alert when you have an event coming up. The iPhone is an easy way to stay connected with the world with twitter, Facebook, etc. while on the go. Smart phones speed up the amount of work done in one day. The app Store is another great feature of the iPhone.",
  },
  {
    name: "Football",
    img: "https://images.unsplash.com/photo-1599204606395-ede983387d21?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 80000,
    desc: "The iPhone has made my life easier with school and everyday living. It helps with homework and can translate English to many different languages. The iCalander is just unbelievable in the iPhone. An actual calendar that has an alarm feature alert when you have an event coming up. The iPhone is an easy way to stay connected with the world with twitter, Facebook, etc. while on the go. Smart phones speed up the amount of work done in one day. The app Store is another great feature of the iPhone.",
  },
];

const seedDB = async () => {
  await Product.insertMany(products);
  console.log("DB Seeded");
};

module.exports = seedDB;
