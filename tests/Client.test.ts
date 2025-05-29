import { describe, it, expect } from 'vitest';
import AiOeClient  from '../src/AiOeClient';
const client = new AiOeClient('http://192.168.232.131:3000', 'http://192.168.232.131:3001');
describe('Client Auth', () => {
    it('should authenticate with valid credentials', async () => {
        
        const response = await client.auth('malo', 'Keziahjones1!', '');
        expect(response).toHaveProperty('user');
        expect(typeof response.user.apiKey).toBe('string');
    });

    it('should fail authentication with invalid credentials', async () => {
        const client = new AiOeClient();
        await expect(client.auth('user', 'wrong', '')).rejects.toThrow();
    });
});

describe("Post Message", () => {
    it("should post a message successfully", async () => {
        
        const response = await client.post({
            content: "Hello, world!",
            group: {
                id: "1"
            },
            sender: {
                id: "2"
            },
            media_type: "text"
        }, 'c6b00f334b2b56fc305e1d827e9038c67b3db9d0aa2119e9ca53b71e489d1a5a');
        expect(response).toHaveProperty('message');
        expect(response.message.content).toBe("Hello, world!");
    });
});

describe.only("Post2 Message", () => {
    it("should post a message successfully", async () => {
        
        const response = await client.post2({
            content: "Hello, world!",
            group: {
                id: "1"
            },
            sender: {
                id: "2"
            },
            media_type: "text"
        }, 'c6b00f334b2b56fc305e1d827e9038c67b3db9d0aa2119e9ca53b71e489d1a5a');
        expect(response).toHaveProperty('message');
        expect(response.message.content).toBe("Hello, world!");
        
    });
});


