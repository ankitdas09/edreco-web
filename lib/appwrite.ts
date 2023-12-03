import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.VITE_APPWRITE_PROJECT_ID!);

export const account = new Account(client);
export { ID } from "appwrite";

const databases = new Databases(client);
const databaseId = process.env.VITE_APPWRITE_DB_ID!;
const collectionId = process.env.VITE_APPWRITE_COLLECTION_ID!;

export { databases, databaseId, collectionId };
