var Twiba = require('twiba');

settings = {}; // Custom config
var tw = new Twiba(); // Without config - you can pass settings optional
tw.get_user('osen_10112').then(usr => {
    console.log("User ID: "+ usr.id +'\nHandle: '+ usr.screen_name); // User ID
}).catch(err => {
    console.log(err);
});