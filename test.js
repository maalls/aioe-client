import AiOeClient from "./dist/AiOeClient.js";
// Example usage of AiOeClient
const client = new AiOeClient();
const rsp = await client.auth('malo', 'Keziahjones1!', '');
console.log(rsp);
//client.getMessages();