import { FormData, File } from 'formdata-node';
import { fileFromPath } from 'formdata-node/file-from-path';

const isNode = () => typeof window === 'undefined';

interface Attachment {
  path?: string;    // for Node
  uri?: string;     // for React Native
  name: string;
  type: string;
}

export async function createFormData(
  fields: Record<string, any>,
  files?: Attachment[]
): Promise<FormData> {
  const form = isNode() ? new FormData() : new FormData();

  // Append regular fields
  for (const [key, value] of Object.entries(fields)) {
    form.append(key, value);
  }

  // Append files
  if (files?.length) {
    for (const file of files) {
      if (isNode() && file.path) {
        const nodeFile = await fileFromPath(file.path);
        form.append("files[]", nodeFile, file.name);
      } else if (file.uri) {
        form.append("files[]", {
          uri: file.uri,
          name: file.name,
          type: file.type
        } as any);
      }
    }
  }

  return form;
}
