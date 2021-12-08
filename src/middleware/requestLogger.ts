import { RequestHandler as Middleware } from 'express';

export const requestLogger: Middleware = (req, _, next) => {
    console.log(req.path);
    next();
};
