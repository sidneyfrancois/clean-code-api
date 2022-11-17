import { HttpRespose } from "../protocols/http";

export const badRequest = (error: Error): HttpRespose => {
  return {
    statusCode: 400,
    body: error,
  };
};
