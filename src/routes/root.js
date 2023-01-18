import { getPromoProducts } from '../services/getPromoProducts.js';
import validate from '../lib/validate.js';

export default (app) => {
  app.get('/', async (req, res, next) => {
    try {
      validate(req.query);
      const { search } = req.query;
      const promoProducts = await getPromoProducts(search);
      res.status(200).json({ promoProducts });
    } catch (err) {
      next(err);
    }
  });
};
