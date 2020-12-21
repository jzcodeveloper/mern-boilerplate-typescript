import { Request, Response, NextFunction, RequestHandler } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { successResponse, errorResponse } from "../utils/response";
import { asyncHandler } from "../middlewares/async";

import { User } from "../models/user";

export const getUsers: RequestHandler = asyncHandler(async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> {
  const users = await User.find({}).lean();

  return successResponse(res, StatusCodes.OK, users);
});

export const getUser: RequestHandler = asyncHandler(async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> {
  const user = await User.findById(req.params.id).lean();

  if (!user) {
    return errorResponse(res, StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
  }

  return successResponse(res, StatusCodes.OK, user);
});

export const createUser: RequestHandler = asyncHandler(async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> {
  const user = await User.create(req.body);

  return successResponse(res, StatusCodes.CREATED, user);
});

export const updateUser: RequestHandler = asyncHandler(async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> {
  const options = { new: true, runValidators: true };
  const user = await User.findByIdAndUpdate(req.params.id, req.body, options);

  if (!user) {
    return errorResponse(res, StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
  }

  return successResponse(res, StatusCodes.OK, user);
});

export const deleteUser: RequestHandler = asyncHandler(async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> {
  const user = await User.findByIdAndRemove(req.params.id);

  if (!user) {
    return errorResponse(res, StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
  }

  return successResponse(res, StatusCodes.OK, user);
});
