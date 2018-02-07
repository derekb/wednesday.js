require('dotenv').config();
var moment = require('moment');
var twilio = require('twilio');
var _ = require('lodash');

if (moment().weekday() != 3)
{
    console.log('It is not Wednesday, my dudes.')
    process.exit();
}

var accountSid = process.env.TWILIO_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var client = new twilio(accountSid, authToken);

var you = process.argv[2]
var your_dudes = _.drop(process.argv, 3);

_.forEach(your_dudes, function(dude) {
    letYourDudeKnow(you, dude);
});

console.log('It is wednesday, my dudes.');

function letYourDudeKnow(you, your_dude) {
    client.messages.create({
        to: you,
        from: your_dude,
        mediaUrl: 'http://i0.kym-cdn.com/entries/icons/original/000/020/016/wednesday.jpg'    
    });
}