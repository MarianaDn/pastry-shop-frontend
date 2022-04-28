import { IconType } from "src/components/common/Icon/Icon";
import Visa from "src/assets/images/visa.png";
import MasterCard from "src/assets/images/mastercard.png";
import GooglePay from "src/assets/images/googlePay.png";
import Cake from "src/assets/images/cake.jpg";
import Cookies from "src/assets/images/cookies.jpg";
import Croissant from "src/assets/images/croissant.jpg";
import Macarun from "src/assets/images/macarun.jpg";
import Eclair from "src/assets/images/eclairs.png";
import Croissants from "src/assets/images/about-image-1.png";
import Cookie from "src/assets/images/about-image-2.png";
import axios from "axios";

interface headerDataProps {
  nav: Array<navType>;
  icons: Array<iconsType>;
}

interface navType {
  id: number;
  name: string;
  category: string;
}

interface iconsType {
  id: number;
  icon: IconType;
}

export const headerData: headerDataProps = {
  nav: [
    { id: 1, name: "Macarons", category: "macarun" },
    { id: 2, name: "Desserts", category: "desserts" },
    { id: 3, name: "Croissants", category: "croissants" },
    { id: 4, name: "Cookies", category: "cookies" },
    { id: 5, name: "Eclairs", category: "eclairs" },
  ],
  icons: [
    { id: 1, icon: IconType.User },
    { id: 2, icon: IconType.Wishlist },
    { id: 3, icon: IconType.Basket },
  ],
};

interface IBenefitsData {
  icon: IconType;
  title: string;
  description: string;
}

export const benefitsData: IBenefitsData[] = [
  {
    icon: IconType.Truck,
    title: "Delivery",
    description:
      'Delivery to the address or to the departments of "Nova Poshta" and "Ukrposhta". Fast delivery in Kyiv.',
  },
  {
    icon: IconType.Privacy,
    title: "Privacy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisc elit. Phasellus aliquam eu, sit vestibulum ultricies sed adipiscing.",
  },
  {
    icon: IconType.Quality,
    title: "Quality guarantee",
    description:
      "We carefully select the range of products. Everything is just fresh.",
  },
];

interface paymentData {
  src: string;
  alt: string;
}

export const payment: Array<paymentData> = [
  { src: Visa, alt: "visa" },
  { src: MasterCard, alt: "mastercard" },
  { src: GooglePay, alt: "google pay" },
];

interface socialMediaProp {
  id: number;
  icon: IconType;
  link: string;
}

export const socialMedia: socialMediaProp[] = [
  {
    id: 1,
    icon: IconType.Facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: IconType.Instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: 3,
    icon: IconType.YouTube,
    link: "https://www.youtube.com/",
  },
  {
    id: 4,
    icon: IconType.Viber,
    link: "https://www.viber.com/",
  },
  {
    id: 5,
    icon: IconType.Telegram,
    link: "https://web.telegram.org/",
  },
];

interface ProductsData {
  id: number;
  image: string;
  category: string;
}

export const productData: ProductsData[] = [
  {
    id: 1,
    image: Cake,
    category: "desserts",
  },
  {
    id: 2,
    image: Croissant,
    category: "croissant",
  },
  {
    id: 3,
    image: Cookies,
    category: "cookies",
  },
  {
    id: 4,
    image: Macarun,
    category: "macarun",
  },
  {
    id: 5,
    image: Eclair,
    category: "eclairs",
  },
];

type aboutItem = {
  image: string;
  alt: string;
  title: string;
  text: string;
};

export const aboutContent: aboutItem[] = [
  {
    image: Croissants,
    alt: "croissants",
    title: "Remember how we enjoyed the sweet in childhood?",
    text: `How did the simplest caramel cause us a storm of admiration? As
  adults, we found that caramel tastes better salty, desserts may look
  like a work of art, but true happiness remains completely childish.`,
  },
  {
    image: Cookie,
    alt: "cookie",
    title: "In Backed & Bliss, joy smells like a nut and vanilla cake",
    text: ` Dreams become real, and everyday life seems easy. Enjoy real French,
  pastries and desserts every day with a cup of fragrant coffee.`,
  },
];

export const deliveryCost: Array<string> = [
  "Within the green zone - UAH 50 (from UAH 500 free of charge)",
  "Within the yellow zone - UAH 80 (from UAH 500 free of charge)",
  "Within the blue zone - UAH 100 (from UAH 700 free of charge)",
];

export const REG_EX_NAME = /^[a-zA-Z-]{3,40}$/;
export const REG_EX_SURNAME = /^[a-zA-Z]{3,50}$/;
export const REG_EX_M0BILE = /^[0-9]{9}$/;
export const REG_EX_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const REG_EX_PASSWORD =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const BASE_URL = "http://localhost:3001/api/";
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjZkMTlmMGEyNTkzY2ViZGYzMDg4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDkyNTI0NSwiZXhwIjoxNjUxMTg0NDQ1fQ.YCAufaVCB-VIEtniNZEEnrxpAefxez6b8_MckJhf45w";

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Barer ${TOKEN}` },
});

export type FoodStuffItemType = {
  img: string;
  title: string;
  desc: string;
  price: number;
};

export interface productItems {
  title: string;
  desc: string;
  img: string;
  price: number;
  quantity?: number;
}
