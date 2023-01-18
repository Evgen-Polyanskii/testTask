import express from 'express';
import bodyParser from 'body-parser';
import addRoutes from './routes/index.js';

export default () => {
  const app = express();
  app.use(bodyParser.json());
  addRoutes(app);
  app.use((req, res) => res.status(404).json({
    message: 'Page not found',
  }));
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    const message = err.message || 'Something went wrong, please try again';
    const status = err.status || err.response?.status || 500;
    res.status(status).json({ message });
  });

  return app;
};
