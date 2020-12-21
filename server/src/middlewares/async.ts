import { Request, Response, NextFunction, RequestHandler } from "express";

export const asyncHandler = (fn: RequestHandler): RequestHandler => (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
