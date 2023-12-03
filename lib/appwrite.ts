import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("");

export const account = new Account(client);
export { ID } from "appwrite";

const databases = new Databases(client);
const databaseId = "";
const collectionId = "";
const contactFormCollectionId = "";
export { databases, databaseId, collectionId, contactFormCollectionId };
