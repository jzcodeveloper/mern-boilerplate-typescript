import { Request, Response, NextFunction, RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { errorResponse } from "../utils/response";
import { asyncHandler } from "./async";
import { validationResult, ValidationChain } from "express-validator";

export const validate = (schemas: ValidationChain[]): RequestHandler =>
  asyncHandler(async function (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    await Promise.all(
      schemas.map((schema: ValidationChain) => schema.run(req))
    );

    const result = validationResult(req);

    if (result.isEmpty()) {
      return next();
    }

    const errors = result.mapped();

    return errorResponse(res, StatusCodes.BAD_REQUEST, errors);
  });
