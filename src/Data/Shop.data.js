import Brownbrim from '../assets/images/shop-img/hats/brown-brim.png';

import Bluebeanie from '../assets/images/shop-img/hats/blue-beanie.png';

import Browncowboy from '../assets/images/shop-img/hats/brown-cowboy.png';

import Greybrim from '../assets/images/shop-img/hats/grey-brim.png';

import Greenbeani from '../assets/images/shop-img/hats/green-beanie.png';

import Treecap from '../assets/images/shop-img/hats/palm-tree-cap.png';

import Redbeanie from '../assets/images/shop-img/hats/red-beanie.png';

import Wolfcap from '../assets/images/shop-img/hats/wolf-cap.png';

import Bluesnapback from '../assets/images/shop-img/hats/blue-snapback.png';

import Adidasnmd from '../assets/images/shop-img/sneakers/adidas-nmd.png';

import Yeezy from '../assets/images/shop-img/sneakers/yeezy.png';

import Blackconverse from '../assets/images/shop-img/sneakers/black-converse.png';

import Whiteairforce from '../assets/images/shop-img/sneakers/white-nike-high-tops.png';

import Nikeredhightops from '../assets/images/shop-img/sneakers/nikes-red.png';

import Nikebrownhightops from '../assets/images/shop-img/sneakers/nike-brown.png';

import Airjordanltd from '../assets/images/shop-img/sneakers/nike-funky.png';

import Timberlands from '../assets/images/shop-img/sneakers/timberlands.png';

import Blackjeansharling from '../assets/images/shop-img/jackets/black-shearling.png';

import Bluejeanjacket from '../assets/images/shop-img/jackets/blue-jean-jacket.png';

import Greenjeanjacket from '../assets/images/shop-img/jackets/grey-jean-jacket.png';

import Brownsharling from '../assets/images/shop-img/jackets/brown-shearling.png';

import Trench from '../assets/images/shop-img/jackets/brown-trench.png';

import Bluetank from '../assets/images/shop-img/women/blue-tank.png';

import Floralblouse from '../assets/images/shop-img/women/floral-blouse.png';

import Floraldress from '../assets/images/shop-img/women/floral-skirt.png';

import Reddotdress from '../assets/images/shop-img/women/red-polka-dot-dress.png';

import Stripedsweater from '../assets/images/shop-img/women/striped-sweater.png';

import Yellowtracksuit from '../assets/images/shop-img/women/yellow-track-suit.png';

import Whiteblouse from '../assets/images/shop-img/women/white-vest.png';

import Camovest from '../assets/images/shop-img/men/camo-vest.png';

import Floralshirt from '../assets/images/shop-img/men/floral-shirt.png';

import Longsleves from '../assets/images/shop-img/men/long-sleeve.png';

import Pinkshirt from '../assets/images/shop-img/men/pink-shirt.png';

import Jeanelongsleve from '../assets/images/shop-img/men/roll-up-jean-shirt.png';

import Bargundyshirt from '../assets/images/shop-img/men/polka-dot-shirt.png';

const SHOPDATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: Brownbrim,
        price: 25,
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: Bluebeanie,
        price: 18,
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: Browncowboy,
        price: 35,
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: Greybrim,
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: Greenbeani,
        price: 18,
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: Treecap,
        price: 14,
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: Redbeanie,
        price: 18,
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: Wolfcap,
        price: 14,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: Bluesnapback,
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: Adidasnmd,
        price: 220,
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: Yeezy,
        price: 280,
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: Blackconverse,
        price: 110,
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: Whiteairforce,
        price: 160,
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: Nikeredhightops,
        price: 160,
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: Nikebrownhightops,
        price: 160,
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: Airjordanltd,
        price: 190,
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: Timberlands,
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: Blackconverse,
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: Bluejeanjacket,
        price: 90,
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: Greenjeanjacket,
        price: 90,
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: Brownsharling,
        price: 165,
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: Trench,
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: 'Women',
    routeName: 'women',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: Bluetank,
        price: 25,
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: Floralblouse,
        price: 20,
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: Floraldress,
        price: 80,
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: Reddotdress,
        price: 80,
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: Stripedsweater,
        price: 45,
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: Yellowtracksuit,
        price: 135,
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: Whiteblouse,
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: 'Men',
    routeName: 'men',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: Camovest,
        price: 325,
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: Floralshirt,
        price: 20,
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: Longsleves,
        price: 25,
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: Pinkshirt,
        price: 25,
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: Longsleves,
        price: 40,
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        image: Bargundyshirt,
        price: 25,
      },
    ],
  },
];

export default SHOPDATA;
