import axios from 'axios';
import getURL from '../lib/getURL.js';

const getProductsId = (adverts) => adverts.map(({ id }) => id);

const getPositions = (pages) => pages.reduce((acc, page) => {
  const { positions, page: pageNumber } = page;
  const positionOnPage = positions.map((place) => ({ place, pageNumber }));
  return [...acc, ...positionOnPage];
}, []);

const createProductsMap = (products) => {
  const productsMap = new Map();
  products.forEach((product) => {
    productsMap.set(product.id, product);
  });
  return productsMap;
};

const buildInfo = (ids, products, positions) => ids.reduce((acc, id) => {
  if (positions.length === 0 || !products.has(id)) return acc;
  const { place, pageNumber: page } = positions.shift();
  const { brand } = products.get(id);
  return [...acc, { brand, place, page }];
}, []);

export const getPromoProducts = async (query) => {
  const { data: promoOffers } = await axios.get(getURL.promoOffers(query));
  const productsIds = getProductsId(promoOffers.adverts);
  const { data: productsInfo } = await axios.get(getURL.promoProducts(productsIds.join(';')));
  const productsMap = createProductsMap(productsInfo.data.products);
  const positions = getPositions(promoOffers.pages);
  return buildInfo(productsIds, productsMap, positions);
};
