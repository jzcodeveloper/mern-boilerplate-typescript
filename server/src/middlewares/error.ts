import { Request, Response, NextFunction } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { errorResponse } from "../utils/response";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  console.error(err);

  let statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR;
  let message: string = ReasonPhrases.INTERNAL_SERVER_ERROR;

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    statusCode = StatusCodes.NOT_FOUND;
    message = ReasonPhrases.NOT_FOUND;
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Duplicate field value entered";
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Validation Error";
  }

  return errorResponse(res, statusCode, message);
}

export default errorHandler;
