import supertest from "supertest";
import app from "../src/server/app";

const request = supertest(app);

describe("GET /random-url", () => {
  it("should return 404", () => {
    return request.get("/random-url").set('Authorization', '1hhoU5hOqpKxKbCZSlgaujHUfvvFHBQW4xxpPUcqhzSDPD6QdahCkBkXhZTjaqYt').then((response) => {
      expect(response.status).toBe(404);
    });
  });
});
