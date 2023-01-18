import { URL } from 'node:url';

const promoOffersUrl = 'https://catalog-ads.wildberries.ru/api/v5/search?';
const promoProductsUrl = 'https://card.wb.ru/cards/list?';

export default {
  promoOffers: (param) => {
    const url = new URL(promoOffersUrl);
    url.search = `keyword=${param}`;
    return url.toString();
  },
  promoProducts: (param) => {
    const url = new URL(promoProductsUrl);
    url.search = `nm=${param}&regions=80,64,83,4,38,33,70,69,86,30,40,48,1,66,31,22,114`;
    return url.toString();
  },
};
