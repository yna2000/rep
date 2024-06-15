import request from 'supertest';
import app from 'src/app';
import { baseUrl, version } from 'config';

// eslint-disable-next-line no-undef
jest.useRealTimers();
const url = `/${baseUrl}/${version}`;

describe(`Testing server configuration`, () => {
	test('Testing whether server is up or not', async () => {
		// Arrange
		const expectedResponse = 200;
		const routeToHit = `${url}/ping`;

		// Act & Assert
		// eslint-disable-next-line no-unused-vars
		const response = await request(app)
			.get(routeToHit)
			.expect(expectedResponse);
	});
});
