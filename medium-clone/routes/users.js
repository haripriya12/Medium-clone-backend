var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET users listing. */

//creating a post

router.post('/post', function(req, res) {
  console.log(req.body)
  models.Post.create({
      title: req.body.title,
      titleDescription: req.body.titleDescription,
      authorName: req.body.authorName,
      subDomain: req.body.subDomain,
      date: req.body.date,
      readTime: req.body.readTime,
      postDescription: req.body.postDescription,
      image: req.body.image    
  }).then(function () {
    
  });
});

//update a post

router.patch('/posts/:postID', function(req,res){
  console.log(req.body)
  models.Post.update({
    title: req.body.title,
    titleDescription: req.body.titleDescription,
    authorName: req.body.authorName,
    subDomain: req.body.subDomain,
    readTime: req.body.readTime,
    postDescription: req.body.postDescription,
    image: req.body.image
  },{
    where: {
      id: req.params.postID
    }
  }).then(function () {
    
  });
});

//Delete a poost

router.delete('/posts/:postID', function(req, res){
  models.Post.destroy({
    where: {
      id:req.params.postID
    }
  }).then(function (res) {
    res.json(res) });
});

//Get the post

router.get('/posts/:postID', function (req, res){
  models.Post.findAll({
    where: {
      id: req.params.postID
    }
  }).then(users => res.json({
    error: false,
    data: users
  }))
  .catch(error => res.json({
    error: true,
    message: 'error'
  }));
});

//Creating a comment

router.post('/posts/:postID/comments', function(req, res){
  console.log(req.body)
  models.Comment.create({
    postid: req.params.postID,
    commentdate: req.body.commentdate,
    commentdata: req.body.commentdata,
    commentedby: req.body.commentedby,
    image: req.body.image
  }).then(function (){
 
  });
});

//updating a comment

router.patch('/posts/:postID/comments/:commentID', function(req,res){
  console.log(req.body)
  models.Comment.update({
    commentdate: req.body.commentdate,
    commentdata: req.body.commentdata,
    commentedby: req.body.commentedby,
    image: req.body.image
  },{
    where: {
      postid: req.params.postID,
      id: req.params.commentID
    }
  }).then(function () {
    
  });
});

//Deleting a comment

router.delete('/posts/:postID/comments/:commentID', function(req, res){
  console.log(req.body)
  models.Comment.destroy({
    where: {
      postid: req.params.postID,
      id: req.params.commentID
    }
  }).then(users => res.json({
    error: false,
    message: 'comment has been deleted'
  }))
  .catch(error => res.json({
    error: true,
    message: 'error'
  }));
});


// router.get('/posts/:postId/comments/:commentId', function (req, res){
//   models.Comment.findAll({
//     where: {
//       postid: req.params.postId,
//       id: req.params.commentId
//     }
//   }).then(users => res.json(users))
// });

//Get the comment

router.get('/posts/:postID/comments/:commentID', function (req, res){
  models.Comment.findAll({
    where: {
      postid: req.params.postID,
      id: req.params.commentID
    }
  }).then(users => res.json({
    error: false,
    data: users
  }))
  .catch(error => res.json({
    error: true,
    message: 'error'
  }));
});



module.exports = router;
