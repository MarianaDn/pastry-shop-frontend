import { IconType } from "src/components/common/Icon/Icon";
import { ROUTES } from "./routes";
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

interface headerDataProps {
  nav: Array<navType>;
  icons: Array<iconsType>;
}

interface navType {
  id: number;
  name: string;
  path: string;
}

interface iconsType {
  id: number;
  icon: IconType;
}

export const headerData: headerDataProps = {
  nav: [
    { id: 1, name: "Macarons", path: ROUTES.MACARONS },
    { id: 2, name: "Desserts", path: ROUTES.DESSERTS },
    { id: 3, name: "Croissants", path: ROUTES.CROISSANTS },
    { id: 4, name: "Cookies", path: ROUTES.COOKIES },
    { id: 5, name: "Eclairs", path: ROUTES.ECLAIRS },
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
  link: string;
}

export const productData: ProductsData[] = [
  {
    id: 1,
    image: Cake,
    link: ROUTES.DESSERTS,
  },
  {
    id: 2,
    image: Croissant,
    link: ROUTES.CROISSANTS,
  },
  {
    id: 3,
    image: Cookies,
    link: ROUTES.COOKIES,
  },
  {
    id: 4,
    image: Macarun,
    link: ROUTES.MACARONS,
  },
  {
    id: 5,
    image: Eclair,
    link: ROUTES.ECLAIRS,
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
