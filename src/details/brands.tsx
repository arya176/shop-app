export type brandsType = {
  id: number;
  brand: string;
  history: string;
  products: {
    name: string;
    picture: string;
    size: "S" | "M" | "L" | "XL";
    price: number;
  }[];
}[];

export const brands: brandsType = [
  {
    id: 1,
    brand: "H & M",
    history: `H & M Hennes & Mauritz AB or H&M Group (abbreviated H&M) is a multinational clothing company based in Sweden that focuses on fast-fashion clothing for men, women, teenagers, and children. As of 23 June 2022, H&M Group operates in 75 geographical markets with 4,801 stores under the various company brands, with 107,375[b] full-time equivalent positions.[7]
    H&M is the second largest international clothing retailer, behind Inditex, the parent company of Zara.[8] H&M was founded by Erling Persson, and its current CEO is Helena Helmersson.`,
    products: [
      {
        name: "shirt",
        picture:
          "https://img1.theiconic.com.au/mpLm_AGsLZ9eev6K2fusIsdifr8=/634x811/filters:quality(95):fill(ffffff)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fcamixa-7746-9237121-1.jpg",
        size: "L",
        price: 35,
      },
      {
        name: "pants",
        picture:
          "https://img.ltwebstatic.com/images3_pi/2022/05/18/1652838847c2a4ea9e28e9110db112e00d7b02ab31_thumbnail_900x.webp",
        size: "S",
        price: 135,
      },
      {
        name: "jackets",
        picture:
          "https://img.ltwebstatic.com/images3_pi/2020/07/16/1594866538a9a53cea2f044f6a49484c919f36caf2_thumbnail_900x.webp",
        size: "M",
        price: 215,
      },
      {
        name: "shoes",
        picture:
          "https://img.ltwebstatic.com/images3_pi/2021/08/18/1629276649cad6275d432efeef6da8418ecfca25ee_thumbnail_900x.webp",
        size: "L",
        price: 150,
      },
    ],
  },
  {
    id: 2,
    brand: "UNIQLO",
    history: `A Yamaguchi-based company, Ogori Shōji (which, until then, had been operating men's clothing shops called "Men's Shop OS") was founded in March 1949 in Ube, Yamaguchi.[4]

      On 2 June 1984, it opened a unisex casual wear store in Fukuro-machi, Naka-ku, Hiroshima, under the name "Unique Clothing Warehouse".[5] Initially, the brand was going to be registered as a shortened contraction of "unique clothing".[6] However, in 1988, during administration work in Hong Kong for registering the brand, staff in charge of registration misread the "C" as "Q", and that is how the brand name was born.[7] Tadashi Yanai then changed the store name to "uniqlo" across Japan.[8] In September 1991, the name of the company was changed from "Ogori Shōji" to "Fast Retailing", and by April 1994, there were over 100 Uniqlo stores operating throughout Japan.`,
    products: [
      {
        name: "shirt",
        picture:
          "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/445455/item/augoods_12_445455.jpg?width=1600&impolicy=quality_75",
        size: "M",
        price: 135,
      },
      {
        name: "pants",
        picture:
          "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/447762/item/augoods_03_447762.jpg?width=1600&impolicy=quality_75",
        size: "S",
        price: 235,
      },
      {
        name: "jackets",
        picture:
          "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/445169/item/augoods_69_445169.jpg?width=1600&impolicy=quality_75",
        size: "L",
        price: 415,
      },
      {
        name: "shoes",
        picture:
          "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/432942/item/goods_09_432942.jpg?width=1600&impolicy=quality_75",
        size: "L",
        price: 180,
      },
    ],
  },
  {
    id: 3,
    brand: "LEVI'S",
    history: `Levi Strauss & Co.  is an American clothing company known worldwide for its Levi's  brand of denim jeans. It was founded in May 1853[9] when German-Jewish immigrant Levi Strauss moved from Buttenheim, Bavaria, to San Francisco, California, to open a West Coast branch of his brothers' New York dry goods business. Although the corporation is registered in Delaware,[10] the company's corporate headquarters is located in Levi's Plaza in San Francisco.`,
    products: [
      {
        name: "shirt",
        picture:
          "https://www.levis.com.au/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/default/dwc4733983/images/hi-res/345740000/345740000_10_Model%20Front.jpg?sw=1034&sh=1376",
        size: "L",
        price: 185,
      },
      {
        name: "pants",
        picture:
          "https://cdn.nudiejeans.com/img/Breezy-Britt-Friendly-Blue-113289-02-1_2400x2400.jpg",
        size: "M",
        price: 295,
      },
      {
        name: "jackets",
        picture:
          "https://www.levis.com.au/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/default/dw17b6bf0d/images/hi-res/361370015/361370015_01_Front.jpg?sw=299&sh=397",
        size: "L",
        price: 375,
      },
      {
        name: "shoes",
        picture:
          "https://img.shopstyle-cdn.com/sim/05/62/05622a17a12c96d736e6ec90a5f8a677_best/levis-munro-sneakers-in-white.jpg",
        size: "M",
        price: 210,
      },
    ],
  },
];
