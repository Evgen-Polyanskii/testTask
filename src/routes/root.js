import { getPromoProducts } from '../services/getPromoProducts.js';

export default (app) => {
  app.get('/', async (req, res, next) => {
    try {
      const { search } = req.query;
      const promoProducts = await getPromoProducts(search);
      res.status(200).json({ promoProducts });
    } catch (err) {
      next(err);
    }
  });
};
