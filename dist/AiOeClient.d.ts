export default class AiOeClient {
    API_URL: string;
    socket: any;
    SOCKET_URL: string;
    WEB_URL: string;
    constructor(apiURL?: (string | null), socketURL?: string | null, WEB_URL?: string | null);
    connectAsync(user: any): Promise<unknown>;
    connect(user: any, cb: any): any;
    disconnect(): Promise<void>;
    testPushNotification(deviceId: string): Promise<any>;
    pushNotificationToken(user: any, deviceId: string, pushNotificationToken: string, pushNotificationTokenType: string, key: string): Promise<any>;
    auth(username: string, password: string, device: string): Promise<any>;
    updatePassword(userId: string, password: string, apiKey: string): Promise<any>;
    logout(deviceId: string, key: string): Promise<void>;
    getMessages(params: {
        [key: string]: string;
    } & {
        key: string;
    }): Promise<any>;
    updateGroupAccess(userId: string, groupId: string, apiKey: string): Promise<any>;
    command(name: string, args: any, apiKey: string): Promise<any>;
    post(message: any, apiKey: string): Promise<any>;
    postReceipt(owner: string, receipt: any, apiKey: string): Promise<any>;
    getApis(query: any): Promise<any>;
    saveApi(api: any, apiKey: string): Promise<any>;
    callApi(api: any, values: any, key: string): Promise<any>;
    getUser(username: string, apiKey: string): Promise<any>;
    list(entityName: string, parameters: any): Promise<any>;
    deleteEntity(entityName: string, id: string, key: string): Promise<any>;
    postEntity(entityName: string, payload: any): Promise<any>;
    getSocket(): any;
    fetch(uri: string, params?: any): Promise<any>;
}
