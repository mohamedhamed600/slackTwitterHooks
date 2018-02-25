var Twitter = require('twitter');
require('dotenv/config');

var client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.access_token_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});

let getTwitterStatus =  ()=>{
    return new Promise(async (resolve , reject)=>{
        try {
            const status = await client.get('statuses/user_timeline', {screen_name: 'TechTask1'})
            resolve(status);
        } catch (error) {
            reject(error);
        }
    })
};

module.exports = {
    getTwitterStatus
};