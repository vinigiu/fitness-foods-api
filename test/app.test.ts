import * as supertest from "supertest";
import app from "../src/server/app";

const request = supertest("localhost:3000");

describe("GET /random-url", () => {
  it("should return 404", () => {
    return request.get("/random-url").then((response) => {
      expect(response.status).toBe(404);
    });
  });
});
