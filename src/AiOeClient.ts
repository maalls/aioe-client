import io from "socket.io-client";
import fetch from "cross-fetch";

export default class AiOeClient {

    API_URL: string = 'https://api.ai-oe.co';
    socket: any;
    SOCKET_URL: string = 'https://socket.ai-oe.co';
    WEB_URL: string = 'https://ai-oe.co';

    constructor(apiURL?:(string | null), socketURL?:string | null, WEB_URL?:string | null) {
        console.log("[mobile][aioe][connect] constructing socket client");
        this.socket = null;
        if(socketURL) {
            this.SOCKET_URL = socketURL;
        }
        if(apiURL) {
            this.API_URL = apiURL;
        }
        if(WEB_URL) {
            this.WEB_URL = WEB_URL;
        }
    
    }

    /*async createGroup(name:string, admin_id:string) {

        console.log('creating group', name, admin_id);
        return await this.postEntity('group', { id: null, name: name, users: { id: admin_id } });

    }*/

    /*async postWebpage(html: string) {

        return this.postEntity('webpage', { html });

    }*/

    /*configure({ API_URL, WEB_URL, SOCKET_URL }) {
        this.API_URL = API_URL;
        this.WEB_URL = WEB_URL;
        this.SOCKET_URL = SOCKET_URL;
    }*/

    connectAsync(user:any) {

        console.log("[mobile][aioe][connectAsync] user ID", user.id);
        return new Promise((resolve, reject) => {
            this.connect(user, (socket: any) => {
                resolve(socket);
            })
        })

    }

    connect(user:any, cb:any) {
        if (this.socket && this.socket.connected) {
            console.log("[mobile][aioe][connect] Aleady connected");
            if (cb) cb(this.socket);
        }
        else {
            console.log("[mobile][aioe][connect] connecting to ", this.SOCKET_URL);
            this.socket = io(this.SOCKET_URL, {
                reconnection: true,         // Enable auto-reconnect
                reconnectionAttempts: 5,    // Retry 5 times before failing
                reconnectionDelay: 2000,    // Wait 2 seconds before retrying
                timeout: 10000,             // Max time before timeout (10 sec)
            });
            this.socket.on("connect", () => {
                console.log("[mobile][aioe][connect] WebSocket connected:", this.socket.id);
                this.socket.emit("registerUser", user.id);
                if (cb) cb(this.socket);
            });


            this.socket.on("connect_error", (error:Error) => {
                console.error("❌ Connection failed:", error.message);
            });

            this.socket.on("connect_timeout", () => {
                console.warn("⚠️ Connection timeout: Server is not responding.");
            });

            this.socket.on("reconnect_attempt", (attempt:number) => {
                console.log(`🔄 Reconnection attempt ${attempt}`);
            });

            this.socket.on("reconnect_failed", () => {
                console.error("❌ Could not reconnect after multiple attempts.");
            });

            this.socket.on("disconnect", (reason:string ) => {
                console.warn(`🔌 Disconnected: ${reason}`);
            });


        }
        return this.socket;

    }

    /*async joinRoom(groupId) {
        return aioe.socket.emit("joinRoom", groupId);
    }*/

    /*async emitTyping(groupId, user, action) {
        return aioe.socket.emit("typing", { groupId, user: user, action });

    }*/

    /*async stopTyping(groupId, user) {
        aioe.socket.emit("stopTyping", { groupId, userId: user.id });
    }*/

    /*async leaveRoom(groupId) {
        aioe.getSocket().emit("leaveRoom", groupId);
    }*/

    async disconnect() {
        console.log("disconnecting");
        this.socket.disconnect();
    }

    /*async onMessage(user, callback) {

        this.socket.on("newMessage_" + user.id, async (message) => {
            console.log("User Bot " + user.id + " received message:", message.content);
            callback(message);

        });
    }*/

    async testPushNotification(deviceId:string) {

        return this.postEntity('user/push-token/test', { deviceId });

    }

    async pushNotificationToken(user:any, deviceId:string, pushNotificationToken:string, pushNotificationTokenType:string, key:string) {
        const userId = user.id;
        return this.postEntity('user/push-token', { userId, deviceId, pushNotificationToken, pushNotificationTokenType, key });

    }

    async auth(username:string, password:string, device:string) {

        const uri = this.API_URL + '/api/auth';
        console.log('authenticating username', username, uri);

        const json = await this.fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                device: device
            })
        });

        console.log('[aioe][auth] got auth', json);

        return json;
    }

    async updatePassword(userId:string, password:string, apiKey:string) {
        const uri = this.API_URL + '/api/user/password';

        const response = await this.fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                password: password,
                key: apiKey
            })
        });

        return response;
    }

    async logout(deviceId:string, key:string) {
        console.log("[mobile][aioe] logout");
        const rsp = await this.postEntity('logout', { deviceId: deviceId, key: key });
        console.log("logged out", rsp);
        if (rsp.status == 'ok') return;
        else throw new Error(rsp.message);
    }

    async getMessages(params: { [key: string]: string } & { key: string }) {
        //console.log("params", params);

        if(!params?.key) throw new Error("aioe.getMessages requires a key parameters.");

        let query = new URLSearchParams(params).toString();
        console.log("[mobile][aioe][getMessages] get messages", query);

        const response = await this.fetch(this.API_URL + '/api/chat?' + query);

        return response;
    }

    async updateGroupAccess(userId:string, groupId:string, apiKey:string) {
        console.log("[mobile][aioe][updateGroupAccess] Updating group access time for user", userId, "in group", groupId);

        const response = await this.fetch(this.API_URL + '/api/chat/access', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                group_id: groupId,
                key: apiKey
            })
        });

        console.log("[mobile][aioe][updateGroupAccess] rsp ok:", response.ok);

        return response;

    }

    /*reply(sender, message, reply, image, th, apiKey) {

        const attachments = image ? [{
            uri: image,
            thumbnail_uri: th
        }] : [];
        const data = {
            content: reply,
            sender: sender,
            group: message.group,
            attachments: attachments,
            key: apiKey
        }
        console.log('sending reply', message);
        return this.post(data, apiKey);
    }*/

    async command(name:string, args:any, apiKey:string) {

        const uri = this.API_URL + "/api/command";
        console.log("command", name, uri);
        const data = {
            command: name,
            args: args ? args : null,
            key: apiKey
        }
        const rsp = await this.fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });


        return rsp.json();

    }

    async post(message:any, apiKey:string) {

        const content = message.content;
        console.log("[mobile][aioe][post] posting", content, apiKey);

        const formData = new FormData();
        formData.append('content', content);
        formData.append('sender_id', message.sender.id);
        formData.append('group_id', message.group.id);
        formData.append("key", apiKey);
        if (message.attachments.length) {
            const attachment = message.attachments[0];
            const uri = attachment.uri;
            const type = typeof uri;
            console.log(type);
            if (type === 'string') {

                console.log("adding attchmnent to post form", attachment, type);
                const uriParts = uri.split('.');
                const fileType = uriParts[uriParts.length - 1];
                // If you have a File or Blob, use it directly. If not, append the URI string.
                // You may need to convert the URI to a Blob/File depending on your environment.
                formData.append('file', uri);
            }
            else {
                console.log("not a string");
                formData.append('file', uri);
            }

            if (attachment.thumbnail_uri) {

                const tb = attachment.thumbnail_uri;
                if (type === 'string') {
                    const uriParts = tb.split('.');
                    const fileType = uriParts[uriParts.length - 1];
                    // If you have a File or Blob, use it directly. If not, append the URI string.
                    formData.append('thumbnail', tb);
                    console.log("not a string");
                    formData.append('file', tb);
                }

            }
        }
        //const SERVER_URI = 'http://54.168.50.155:8084/api/chat';

        const response = await this.fetch(this.API_URL + '/api/chat', {
            method: 'POST',
            headers: { 'x-api-key': apiKey },
            body: formData // JSON.stringify({ message: newMessage }),
        });

        return response;

    }

    async postReceipt(owner:string, receipt:any, apiKey:string) {
        const data = { ...receipt, owner, key: apiKey }
        return this.postEntity('receipt', data);
    }

    async getApis(query:any) {

        const rsp = await this.list("apis", query);
        if (rsp.status == 'ok') return rsp.apis;
        else {
            console.log("response", rsp.status, rsp);
            throw new Error(rsp.message);
        }

    }

    async saveApi(api:any, apiKey:string) {

        return this.postEntity("apis", { ...api, key: apiKey });

    }

    async callApi(api:any, values:any, key:string) {

        console.log("api config", api.parameters);
        let query: { [key: string]: any } = {};
        for (let input of api.parameters) {

            console.log('parameter', input);


            if (input.type == 'hidden') {

                query[input.name] = input.value;

            }
            else if (!values[input.name]) {

                throw new Error("Missing parameter:" + input.name);

            }
            else {

                query[input.name] = values[input.name];

            }
        }

        console.log("query", query);

        const queryString = new URLSearchParams(query).toString();
        const uri = api.uri + "?" + queryString;

        console.log("fetching uri", uri);
        const response = await this.fetch(uri);
        console.log("api Response", response);

        return response;

    }

    async getUser(username:string, apiKey:string) {

        const uri = this.API_URL + '/api/user/' + username + '?key=' + apiKey;

        console.log("[mobile][aioe][getUser] calling", uri);
        const user = await this.fetch(uri);

        
        console.log("[mobile][aioe][getUser] user ID", user?.id, 'group count:', user.groups?.length);
        return user;

    }

    async list(entityName:string, parameters:any) {

        const queryString = new URLSearchParams(parameters).toString();
        const uri = this.API_URL + '/api/' + entityName + "?" + queryString;
        console.log("calling", uri);
        const response = await this.fetch(uri);
        console.log("Response:", response);
        return response;


    }

    async deleteEntity(entityName: string, id: string, key: string) {

        const uri = this.API_URL + '/api/' + entityName + '/' + id + '?key=' + key;
        console.log("deleting ", entityName, id);

        const response = await this.fetch(uri, {
            method: "DELETE"
        });

        return response;

    }

    async postEntity(entityName: string, payload: any) {

        const uri = this.API_URL + '/api/' + entityName;
        console.log("calling", uri, entityName, payload);
        const response = await this.fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload), // Convert JS object to JSON
        });

        console.log("Response:", response);
        return response;


    }

    getSocket() {
        return this.socket;
    }

    async fetch(uri:string, params?:any) {
        const response = await fetch(uri, params);
        if (!response.ok) {

            const errorData = await response.json();
            if (errorData.message) {
                throw new Error(`${response.status} error: ${errorData.message}`);
            }
            else {
                console.log("[mobile][aioe] error:", errorData);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }


        }
        else {
            const json = await response.json();
            return json;
        }
    }

}