import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function redirect(req: Request, res: Response, next: NextFunction) {
  if (req.path === '/graphiql') {
    res.redirect('/graphql');
  }
  next();
}
