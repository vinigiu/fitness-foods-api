import * as supertest from "supertest";
import app from "../src/server/app";

const request = supertest("localhost:3000");

describe("GET /login", () => {
  it("should return 200 OK", () => {
    return request.get("/login").then((response) => {
      expect(response.status).toBe(200);
    });
  });
});

describe("GET /signup", () => {
  it("should return 200 OK", () => {
    return request.get("/signup").then((response) => {
      expect(response.status).toBe(200);
    });
  });
});
