import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';
import { Accounts } from 'meteor/accounts-base';
import './main.html';

// Accounts config
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Template.body.helpers({
  notes() {
    /*
     const notes = [
      { text: 'note1' },
      { text: 'note2' },
    ];
    return notes;
    */
    // 선택검색 가능
    // return Notes.find({ owner: Meteor.userId() });
    return Notes.find({});
  },
});

Template.add.events({
  'submit .add-form': function () {
    event.preventDefault();
    // console.log('preventDefault');

    const target = event.target;
    const text = target.text.value;
    // console.log(text);
    Notes.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });

    target.text.value = '';

    $('#addModal').modal('close');
  },
});

Template.note.events({
  'click .delete-note': function () {
    Notes.remove(this._id);
    return false;
  },
});

