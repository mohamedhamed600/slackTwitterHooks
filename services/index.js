var express = require('express');
const tweetsModel = require('../models/tweets');
const TwitterService = require('../services/twitter.service');

exports.addTweets = async (req,res)=>{
  try {
    // get twitter tweets 
    const tweets = await TwitterService.getTwitterStatus();  
    // clear all tweets from db       
    await tweetsModel.remove({});
    // save the new tweets
    tweets.forEach(element => {      
        tweetsModel.create({tweet: element.text,twitter_id:element.user.id_str,avatar:element.user.profile_image_url,
          user_name:element.user.user_name,screen_id:element.user.screen_name,created_at:element.created_at})
    });
    res.status(200).send(tweets);
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
}

exports.getAllTweets = async (req,res)=>{
  try {
    const tweets = await tweetsModel.find({});
    res.status(200);
    res.send(tweets);
  } catch (error) {
    console.log(error);
    res.status(401);
  }
}

