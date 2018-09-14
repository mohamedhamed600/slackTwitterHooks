var Twitter = require('twitter');
require('dotenv/config');

var client = new Twitter({
  consumer_key: 'A7FsFfqyuxGjc6BubKzok0cib',
  consumer_secret: '0XBim8axGDOSOGC1NddO3y2xxpbwKqYFpEzKvMngMIqexiW8OG',
  access_token_key: '966139520474406913-fXT40fYVxc5sUrdHENPaFNfq8jxOSEF',
  access_token_secret: 'K7snZ7j06SN7z7R6O6iNu9ieEM5xQaJZVFibtbNTkfjnH'
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