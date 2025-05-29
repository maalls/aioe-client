import { FormData } from 'formdata-node';
interface Attachment {
    path?: string;
    uri?: string;
    name: string;
    type: string;
}
export declare function createFormData(fields: Record<string, any>, files?: Attachment[]): Promise<FormData>;
export {};
