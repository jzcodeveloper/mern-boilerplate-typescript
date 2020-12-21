import { Response } from "express";

export class BaseResponse<T> {
  public success!: boolean;
  public data!: T;
  public constructor(success: boolean, data: T) {
    this.success = success;
    this.data = data;
  }
}

export class SuccessResponse<T> extends BaseResponse<T> {
  constructor(data: T) {
    super(true, data);
  }
}

export class ErrorResponse<T> extends BaseResponse<T> {
  constructor(data: T) {
    super(false, data);
  }
}

export function apiResponse<T>(
  res: Response,
  statusCode: number,
  data: T
): Response {
  return res.status(statusCode).json(data);
}

export function successResponse<T>(
  res: Response,
  statusCode: number,
  data: T
): Response {
  const obj = new SuccessResponse<T>(data);
  return apiResponse<SuccessResponse<T>>(res, statusCode, obj);
}

export function errorResponse<T>(
  res: Response,
  statusCode: number,
  data: T
): Response {
  const obj = new ErrorResponse<T>(data);
  return apiResponse<ErrorResponse<T>>(res, statusCode, obj);
}
