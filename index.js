var twilio = require('twilio');

var accountSid = process.argv[0];
var authToken = process.argv[1];

var your_dude = process.argv[3];
var you = process.argv[4];

var client = new twilio(accountSid, authToken);

client.messages.create({
    to: you,
    from: your_dude,
    mediaUrl: 'http://i0.kym-cdn.com/entries/icons/original/000/020/016/wednesday.jpg'    
});

console.log('It is wednesday, my dudes.');