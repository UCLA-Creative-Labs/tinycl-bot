import { clientCDN } from "./client";

export function getEntry({ entryId }: { entryId: string }) {
    clientCDN.getEntries({
            "sys.id": entryId
        })
        .then(response => console.log(response.items))
        .catch(console.error);
}

export async function getEntriesFromFields({ contentType, fields }: { contentType: string, fields: any }) {
    const fieldsQuery = Object.fromEntries(Object.entries(fields).map(([fieldName, fieldValue]) => [`fields.${fieldName}`, fieldValue]));

    const query = {
        content_type: contentType,
        ...fieldsQuery
    }

    return clientCDN.getEntries(query)
        .then(response => response.items)
        .catch(console.error);
}