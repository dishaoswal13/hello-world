import request from 'supertest';
import app from './index';

describe('Hello World App', () => {
  test('GET / returns hello world message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Hello World!');
  });

  test('GET /health returns healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'healthy');
  });
});