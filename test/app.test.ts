import app from '../src/server/app';
import request from "supertest";


describe("GET /random-url", () => {
  it("Deve retornar 404 - URL inexistente", () => {
    return request(app).get("/random-url").set('Authorization', '1hhoU5hOqpKxKbCZSlgaujHUfvvFHBQW4xxpPUcqhzSDPD6QdahCkBkXhZTjaqYt').then((response) => {
      expect(response.status).toBe(404);
    });
  });

  it('Deve retorna detalhes da API', async () => {
    const response = await request(app).get('/api/v1/').set('Authorization', '1hhoU5hOqpKxKbCZSlgaujHUfvvFHBQW4xxpPUcqhzSDPD6QdahCkBkXhZTjaqYt');
    expect(response.statusCode).toBe(200);
  });
});
