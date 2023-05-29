import { Mongo } from 'meteor/mongo';

export const LinksCollection = new Mongo.Collection('links');
LinksCollection.createIndex({ a: 1 })
LinksCollection.createIndex({ b: 1 })
LinksCollection.createIndex({ c: 1 })
LinksCollection.createIndex({ d: 1 })
LinksCollection.createIndex({ e: 1 })
LinksCollection.createIndex({ f: 1 })
LinksCollection.createIndex({ g: 1 })
LinksCollection.createIndex({ h: 1 })