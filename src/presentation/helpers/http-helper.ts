import { ServerError } from "../errors/server-error";
import { HttpRespose } from "../protocols/http";

export const badRequest = (error: Error): HttpRespose => {
  return {
    statusCode: 400,
    body: error,
  };
};

export const serverError = (): HttpRespose => ({
  statusCode: 500,
  body: new ServerError(),
});
