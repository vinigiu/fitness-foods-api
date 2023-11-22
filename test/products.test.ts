import app from '../src/server/app';
import request from "supertest";

describe('Testes de Endpoints', () => {
    it('Deve retorna detalhes da API', async () => {
        const response = await request(app).get('/api/v1/').set('Authorization', '1hhoU5hOqpKxKbCZSlgaujHUfvvFHBQW4xxpPUcqhzSDPD6QdahCkBkXhZTjaqYt');
        expect(response.statusCode).toBe(200);
      });

    it('Deve retornar a lista de produtos paginada', async () => {
      const response = await request(app).get('/api/v1/products?page=1').set('Authorization', '1hhoU5hOqpKxKbCZSlgaujHUfvvFHBQW4xxpPUcqhzSDPD6QdahCkBkXhZTjaqYt');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  
    it('Deve retornar um produto pelo código', async () => {
      const response = await request(app).get('/api/v1/products/20221126').set('Authorization', '1hhoU5hOqpKxKbCZSlgaujHUfvvFHBQW4xxpPUcqhzSDPD6QdahCkBkXhZTjaqYt');
      expect(response.statusCode).toBe(200);
    });
  
    it('Deve editar um produto pelo código', async () => {
      const response = await request(app).put('/api/v1/products/20221126').set('Authorization', '1hhoU5hOqpKxKbCZSlgaujHUfvvFHBQW4xxpPUcqhzSDPD6QdahCkBkXhZTjaqYt').send({ creator: 'Vinícius' });
      expect(response.statusCode).toBe(200);
    });
  
    it('Deve excluir um produto pelo código', async () => {
      const response = await request(app).delete('/api/v1/products/20221126').set('Authorization', '1hhoU5hOqpKxKbCZSlgaujHUfvvFHBQW4xxpPUcqhzSDPD6QdahCkBkXhZTjaqYt');
      expect(response.statusCode).toBe(200);
    });
  });