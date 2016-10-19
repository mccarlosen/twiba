var Twiba = require('twiba');

settings = {}; // Custom config
var tw = new Twiba(); // Without config - you can pass settings optional
tw.get_user_id('osen_10112').then(usr => {
    console.log(usr.id); // User ID
}).catch(err => {
    console.log(err);
});