/*Updates:
Bryce Baker:
	controller variable
	control structure for routing post data
 */
var express = require('express');
var router = express.Router();

var controller = require('../controller/database');

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Members' });
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/users/login');
}

//post data routed to controller for processing
if(req.url==="/createProfile") {
    router.post("/createProfile", controller.createProfile);
}
else if(req.url==="/editProfile") {
    router.post("/editProfile", controller.editProfile);
}
else if(req.url==="/deleteProfile") {
    router.post("/deleteProfile", controller.deleteProfile);
}
else if(req.url==="/sendMessage") {
    router.post("/sendMessage", controller.sendMessage);
}
else if(req.url==="/readMessage") {
    router.post("/readMessage", controller.readMessage);
}
else if(req.url==="/deleteMessage") {
    router.post("/deleteMessage", controller.deleteMessage);
}
else if(req.url==="/friendRequest") {
    router.post("/friendRequest", controller.friendRequest);
}
else if(req.url==="/friendAccept") {
    router.post("/friendAccept", controller.friendAccept);
}
else if(req.url==="/friendDecline") {
    router.post("/friendDecline", controller.friendDecline);
}
else if(req.url==="/unFriend") {
    router.post("/unFriend", controller.unFriend);
}
else if(req.url==="/block") {
    router.post("/block", controller.block);
}
else if(req.url==="/unblock") {
    router.post("/unblock", controller.unblock);
}
else if(req.url==="/paw5") {
    router.post("/paw5", controller.paw5);
}
else if(req.url==="/follow") {
    router.post("/follow", controller.follow);
}
else if(req.url==="/unfollow") {
    router.post("/unfollow", controller.unfollow);
}
else if(req.url==="/post") {
    router.post("/post", controller.post);
}
else if(req.url==="/comment") {
    router.post("/comment", controller.comment);
}
else if(req.url==="/share") {
    router.post("/share", controller.share);
}
else if(req.url==="/getProfile") {
    router.post("/getProfile", controller.getProfile);
}

module.exports = router;
