import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6569bea563c0adebb80e");

export const account = new Account(client);
export { ID } from "appwrite";

const databases = new Databases(client);
const databaseId = "6569befacb54f94f3c6f";
const collectionId = "6569bf065f66b7069af5";
const contactFormCollectionId = "656cad2ce42276cf1942";
export { databases, databaseId, collectionId, contactFormCollectionId };
