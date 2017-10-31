import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Notes = new Mongo.Collection('notes');
// cmd : meteor mongo 가능
// db.notes.insert({text: "Hello World", createAt: new Date()});

