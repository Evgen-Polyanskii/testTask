import tasks from './root.js';

const controllers = [tasks];

export default (app) => controllers.forEach((f) => f(app));
