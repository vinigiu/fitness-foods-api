import * as supertest from "supertest";
import app from "../src/server/app";

const request = supertest("localhost:3000");

describe("GET /", () => {
  it("should return 200 OK", (done) => {
    request.get("/")
      .expect(200, done);
  });
});
