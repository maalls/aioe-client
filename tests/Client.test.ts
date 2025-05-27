import { describe, it, expect } from 'vitest';
import AiOeClient  from '../src/AiOeClient';

describe('Client Auth', () => {
    it('should authenticate with valid credentials', async () => {
        const client = new AiOeClient();
        const response = await client.auth('user', 'test', '');
        expect(response).toHaveProperty('token');
        expect(typeof response.token).toBe('string');
    });

    it('should fail authentication with invalid credentials', async () => {
        const client = new AiOeClient();
        await expect(client.auth('user', 'wrong', '')).rejects.toThrow();
    });
});

// We recommend installing an extension to run vitest tests.