import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      id: "recZkNf2kwmdBcqd0",
       name: "Zhi Ju_Sword Spirit",
  price: 10999,
  image: "https://thehanfustory.com/cdn/shop/files/IMG_1597_1296x.jpg?v=1687528712",
  size: [
    "S",
    "M",
    "L"
  ],
  gender: "Women",
  description: "Complete Set: Zhiju Pao(Robe), Coat, Belt, Fabric: Polyester",
  category: "Han",
  shipping: true
    },
    {
      id: "recEHmzvupvT8ZONH",
  name: "Jiaoling Ruqun_Empress Wu",
  price: 13699,
  image: "https://thehanfustory.com/cdn/shop/products/IMG_3801_1296x.jpg?v=1680500606",
  size: [
    "M",
    "L"
  ],
  gender: "Women",
  description: "Complete Set: Cross Collar Top, Da Xiu Shan (Coat), Wrapped Skirt, Fabric: Polyester",
  category: "Wei, Jin"
    },
    {
      id: "rec5NBwZ5zCD9nfF0",
      name: "Qiyao Ruqun_Divine",
      price: 42999,
      image: "https://thehanfustory.com/cdn/shop/products/IMG_4135_1296x.jpg?v=1681213690",
      size: [
        "S",
        "M",
        "L"
      ],
      gender: "Women",
      description: "Complete Set: Camisole, Da Xiu Shan (Coat), Wrapped Skirt, Fabric: Polyester",
      category: "Northern and Southern"
    },
    {
      id: "recd1jIVIEChmiwhe",
      name: "Hezi Qun_Champagne",
      price: 29899,
      image: "https://thehanfustory.com/cdn/shop/products/1_2e0ba5b1-2ec7-40e3-a417-c6e824222d48_1296x.png?v=1637767744",
      size: [
        "S",
        "M",
        "L"
      ],
      gender: "Women",
      description: "Complete Set: Hezi Qun, Da Xiu Shan, Fabric: Polyester, Chiffon",
      category: "Sui-Tang",
      shipping: true
    },
  ],

};
export default data;
