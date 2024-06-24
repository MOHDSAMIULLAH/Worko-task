const request = require('supertest');
const app = require('../app'); // Assuming app.js exports the express app

describe('User API', () => {
    it('should list all users', async () => {
        const res = await request(app).get('/api/worko/user');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('length');
    });

    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/worko/user')
            .send({ email: 'test@example.com', name: 'Test User', age: 30, city: 'Test City', zipCode: '12345' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
    });

    // Additional tests for GET, PUT, PATCH, DELETE
});
