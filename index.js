require('dotenv').config();
var moment = require('moment');
var twilio = require('twilio');

if (moment().weekday() != 3)
{
    console.log('It is not Wednesday, my dudes.')
    process.exit();
}

var accountSid = process.env.TWILIO_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;

var your_dude = process.argv[3];
var you = process.argv[4];

var client = new twilio(accountSid, authToken);

letYourDudeKnow(you, your_dude);

console.log('It is wednesday, my dudes.');

function letYourDudeKnow(you, your_dude) {
    client.messages.create({
        to: you,
        from: your_dude,
        mediaUrl: 'http://i0.kym-cdn.com/entries/icons/original/000/020/016/wednesday.jpg'    
    });
}