import {
  sales1,
  sales2,
  sales3,
  sales4,
  sales5,
  sales6,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  employee1,
  employee2,
  employee3,
  employee4,
  employee5,
  employee6,
  employee7,
  employee8,
  employee9,
} from "../assets/images";

import {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  phone,
  mail,
  mastercard,
  visa,
  paypal,
} from "../assets/icons";

export const languages = [
  { id: "english", label: "English" },
  { id: "francaise", label: "Francaise" },
  { id: "spanish", label: "Spanish" },
  { id: "arabic", label: "العربية" },
];

export const navLinks = [
  { href: "", label: "Home" },
  { href: "about", label: "About" },
  { href: "contact", label: "Contact" },
  { href: "signup", label: "Sign Up" },
];

export const mobileLinks = [
  { href: "", label: "Home" },
  { href: "about", label: "About" },
  { href: "contact", label: "Contact" },
  { href: "signup", label: "Sign Up" },
  { href: "wishlist", label: "Wishlist" },
  { href: "cart", label: "Cart" },
];

export const homeLinks = [
  { icon: true, value: "Women's Fashion" },
  { icon: true, value: "Men's Fashion" },
  { icon: false, value: "Electronics" },
  { icon: false, value: "Home & Lifestyle" },
  { icon: false, value: "Medicine" },
  { icon: false, value: "Sports & Outdoor" },
  { icon: false, value: "Baby's & Toys" },
  { icon: false, value: "Groceries & Pets" },
  { icon: false, value: "Health & Beauty" },
];

export const time = [
  { id: 1, time: "Days", value: "03" },
  { id: 2, time: "Hours", value: "23" },
  { id: 3, time: "Minutes", value: "19" },
  { id: 4, time: "Seconds", value: "56" },
];

export const sales = [
  {
    img: sales1,
    label: "HAVIT HV-G92 Gamepad",
    price: "120",
    oldPrice: "160",
    rate: "88",
    full: 5,
    empty: 0,
    half: 0,
    percent: "40",
  },
  {
    img: sales2,
    label: "AK-900 Wired Keyboard",
    price: "130",
    oldPrice: "150",
    rate: "75",
    full: 4,
    empty: 1,
    half: 0,
    percent: "20",
  },
  {
    img: sales3,
    label: "IPS LCD Gaming Monitor",
    price: "370",
    oldPrice: "400",
    rate: "99",
    full: 4,
    empty: 0,
    half: 1,
    percent: "30",
  },
  {
    img: sales4,
    label: "Hyperx Cloud ||",
    price: "120",
    oldPrice: "180",
    rate: "100",
    full: 4,
    empty: 0,
    half: 1,
    percent: "35",
  },
  {
    img: sales5,
    label: "iPhone 15",
    price: "669",
    oldPrice: "799",
    rate: "129",
    full: 5,
    empty: 0,
    half: 0,
    percent: "20",
  },
  {
    img: sales6,
    label: "PC Gamer",
    price: "1680",
    oldPrice: "2080",
    rate: "50",
    full: 4,
    empty: 0,
    half: 0,
    percent: "20",
  },
  // {
  //   img: sales7,
  //   label: "PS5 Console",
  //   price: "400",
  //   oldPrice: "450",
  //   rate: "310",
  //   full: "5",
  //   percent: "30",
  // },
  // {
  //   img: sales8,
  //   label: "Televisions 50 4-Series 4k ",
  //   price: "210",
  //   oldPrice: "269",
  //   rate: "30",
  //   full: "4",
  //   percent: "25",
  // },
];

export const categories = [
  { icon: "fa-solid fa-mobile-screen-button", label: "Phones" },
  { icon: "fa-solid fa-laptop", label: "Laptops" },
  { icon: "fa-solid fa-camera", label: "Camera" },
  { icon: "fa-solid fa-headphones-simple", label: "Head Phones" },
  { icon: "fa-solid fa-gamepad", label: "Gaming" },
  { icon: "fa-solid fa-house", label: "Home Appliances" },
  { icon: "fa-solid fa-tv", label: "Televisions" },
  { icon: "fa-solid fa-shirt", label: "Fashion and Apparel" },
  { icon: "fa-solid fa-volleyball", label: "Sport" },
];

export const bestSelling = [
  {
    img: product1,
    label: "The north coat",
    price: "260",
    oldPrice: "320",
    rate: "65",
    full: 5,
    empty: 0,
    half: 0,
    percent: null,
  },
  {
    img: product2,
    label: "Gucci duffle bag",
    price: "960",
    oldPrice: "1080",
    rate: "112",
    full: 5,
    empty: 0,
    half: 0,
    percent: null,
  },
  {
    img: product3,
    label: "RGB liquid CPU Cooler",
    price: "135",
    oldPrice: "210",
    rate: "40",
    full: 4,
    empty: 1,
    half: 0,
    percent: null,
  },
  {
    img: product4,
    label: "Small BookSelf",
    price: "360",
    oldPrice: "",
    rate: "10",
    full: 3,
    empty: 1,
    half: 1,
    percent: null,
  },
];

export const services = [
  {
    icon: service1,
    title: "FREE AND FAST DELIVERY",
    value: "Free delivery for all orders over $1000",
  },
  {
    icon: service2,
    title: "Order Tracking",
    value:
      "Enable easy track orders from the moment they are shipped until they are delivered.",
  },
  {
    icon: service3,
    title: "International Shipping",
    value: "We offer international shipping",
  },
  {
    icon: service4,
    title: "Product Demos",
    value: "Create video demos to showcase your products in action",
  },
  {
    icon: service5,
    title: "MONEY BACK GUARANTEE",
    value: "We reurn money within 30 days",
  },
  {
    icon: service6,
    title: "24/7 CUSTOMER SERVICE",
    value: "Friendly 24/7 customer support",
  },
];

export const products = [
  {
    img: product11,
    name: "Breed Dry Dog Food",
    price: "100",
    full: 3,
    half: 0,
    empty: 2,
    rate: "35",
    percent: null,
  },
  {
    img: product5,
    name: "CANON EOS DSLR Camera",
    price: "360",
    full: 4,
    half: 0,
    empty: 1,
    rate: "95",
    percent: null,
  },
  {
    img: product7,
    name: "ASUS FHD Gaming Laptop",
    price: "700",
    full: 5,
    half: 0,
    empty: 0,
    rate: "325",
    percent: null,
  },
  {
    img: product12,
    name: "Curology Product Set ",
    price: "500",
    full: 4,
    half: 1,
    empty: 0,
    rate: "145",
    percent: null,
  },
  {
    img: product8,
    name: "Kids Electric Car",
    price: "960",
    full: 4,
    half: 0,
    empty: 1,
    rate: "65",
    percent: null,
  },
  {
    img: product10,
    name: "Jr. Zoom Soccer Cleats",
    price: "116",
    full: 4,
    half: 0,
    empty: 0,
    rate: "350",
    percent: null,
  },
  {
    img: product6,
    name: "GP11 Shooter USB Gamepad",
    price: "80",
    full: 4,
    half: 1,
    empty: 0,
    rate: "512",
    percent: null,
  },
  {
    img: product9,
    name: "Quilted Satin Jacket",
    price: "350",
    full: 4,
    half: 0,
    empty: 0,
    rate: "150",
    percent: null,
  },
];

export const stats = [
  {
    icon: "fa-solid fa-store",
    label: "Sallers active our site",
    value: "10.5 K",
  },
  {
    icon: "fa-solid fa-dollar-sign",
    label: "Monthly Produduct Sale",
    value: "30 K",
  },
  {
    icon: "fa-solid fa-bag-shopping",
    label: "Customer active in our site",
    value: "45.7 K",
  },
  {
    icon: "fa-solid fa-sack-dollar",
    label: "Anual gross sale in our site",
    value: "25 K",
  },
];

export const employees = [
  {
    id: 1,
    phase: 0,
    name: "Mark Johnson",
    img: employee1,
    job: "CEO",
    socials: [
      { icon: "fa-brands fa-x-twitter" },
      { icon: "fa-brands fa-instagram" },
      { icon: "fa-brands fa-linkedin-in" },
    ],
  },
  {
    id: 2,
    phase: 0,
    name: "Andrew Johnson",
    img: employee2,
    job: "Co-Founder",
    socials: [
      { icon: "fa-brands fa-x-twitter" },
      { icon: "fa-brands fa-instagram" },
      { icon: "fa-brands fa-linkedin-in" },
    ],
  },
  {
    id: 3,
    phase: 0,
    name: "Matthew Davis",
    img: employee3,
    job: "Chief Technology Officer",
    socials: [
      { icon: "fa-brands fa-x-twitter" },
      { icon: "fa-brands fa-instagram" },
      { icon: "fa-brands fa-linkedin-in" },
    ],
  },
  {
    id: 4,
    phase: 1,
    name: "Ryan Martinez",
    img: employee4,
    job: "Chief Operating Officer",
    socials: [
      { icon: "fa-brands fa-x-twitter" },
      { icon: "fa-brands fa-instagram" },
      { icon: "fa-brands fa-linkedin-in" },
    ],
  },
  {
    id: 5,
    phase: 1,
    name: "Christopher Lee",
    img: employee5,
    job: "Chief Financial Officer",
    socials: [
      { icon: "fa-brands fa-x-twitter" },
      { icon: "fa-brands fa-instagram" },
      { icon: "fa-brands fa-linkedin-in" },
    ],
  },
  {
    id: 6,
    phase: 1,
    name: "Jason Miller",
    img: employee6,
    job: "Head of Marketing",
    socials: [
      { icon: "fa-brands fa-x-twitter" },
      { icon: "fa-brands fa-instagram" },
      { icon: "fa-brands fa-linkedin-in" },
    ],
  },
  {
    id: 7,
    phase: 2,
    name: "Nicholas Taylor",
    img: employee7,
    job: "Head of Product Development",
    socials: [
      { icon: "fa-brands fa-x-twitter" },
      { icon: "fa-brands fa-instagram" },
      { icon: "fa-brands fa-linkedin-in" },
    ],
  },
  {
    id: 8,
    phase: 2,
    name: "Emma Watson",
    img: employee8,
    job: "Managing Director",
    socials: [
      { icon: "fa-brands fa-x-twitter" },
      { icon: "fa-brands fa-instagram" },
      { icon: "fa-brands fa-linkedin-in" },
    ],
  },
  {
    id: 9,
    phase: 2,
    name: "Daniel Clark",
    img: employee9,
    job: "Chief Sales Officer",
    socials: [
      { icon: "fa-brands fa-x-twitter" },
      { icon: "fa-brands fa-instagram" },
      { icon: "fa-brands fa-linkedin-in" },
    ],
  },
];

export const signup = [
  { placeholder: "Name", type: "text" },
  { placeholder: "Email or Phone Number" },
  { placeholder: "Password", type: "password" },
];

export const login = [
  { placeholder: "Email or Phone Number", type: "email" },
  { placeholder: "Password", type: "password" },
];

export const footerLinks = [
  {
    label: "Support",
    links: [
      {
        href: "/",
        value: "111 Bijoy sarani, Dhaka,",
      },
      { href: "/", value: "DH 1515, Bangladesh." },
      { href: "/", value: "exclusive@gmail.com" },
      { href: "/", value: "+88015-88888-9999" },
    ],
  },
  {
    label: "Account",
    links: [
      { href: "/", value: "My Account" },
      { href: "/", value: "Login / Register" },
      { href: "/", value: "Cart" },
      { href: "/", value: "Wishlist" },
      { href: "/", value: "Shop" },
    ],
  },
  {
    label: "Quick Link",
    links: [
      { href: "/", value: "Privacy Policy" },
      { href: "/", value: "Terms Of Use" },
      { href: "/", value: "FAQ" },
      { href: "/", value: "Contact" },
    ],
  },
];

export const socials = [
  { icon: "fa-brands fa-facebook-f", label: "facebook" },
  { icon: "fa-brands fa-x-twitter", label: "twitter" },
  { icon: "fa-brands fa-instagram", label: "instagram" },
  { icon: "fa-brands fa-whatsapp", label: "whatsapp" },
];

export const contact = [
  {
    img: phone,
    label: "Call To Us",
    informations: [
      { label: "We are available 24/7, 7 days a week." },
      { label: "Phone: +8801611112222" },
    ],
    line: true,
  },
  {
    img: mail,
    label: "Write To US",
    informations: [
      { label: "Fill out our form and we will contact you within 24 hours." },
      { label: "Emails: customer@exclusive.com" },
      { label: "Emails: support@exclusive.com" },
    ],
    line: false,
  },
];

export const contactInputs = [
  { label: "Your Name", type: "text" },
  { label: "Your Email", type: "email" },
  { label: "Subject", type: "text" },
];

export const cartbar = [
  { name: "Product", positon: "" },
  { name: "Price", positon: "center" },
  { name: "Quantity", positon: "center" },
  { name: "Subtotal", positon: "end" },
];

export const billingInformations = [
  { label: "First Name", type: "text", optional: false },
  { label: "Street Address", type: "text", optional: false },
  { label: "Apartment,Floor,ect, (Optional)", type: "text", optional: true },
  { label: "Town / City", type: "text", optional: false },
  { label: "ZIP Code ", type: "text", optional: false },
  { label: "Phone Number", type: "text", optional: false },
  { label: "Email Address", type: "email", optional: false },
];

export const paymethods = [
  {
    name: "Bank",
    option: "option1",
    icon: true,
    icons: [{ icon: visa }, { icon: mastercard }, { icon: paypal }],
  },
  {
    name: "Cash on delivery",
    option: "option2",
    icon: false,
  },
];
