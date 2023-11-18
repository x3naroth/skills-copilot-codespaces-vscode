// create new server
const express = require('express');
const router = express.Router();
// import controller
const commentsCtrl = require('../controllers/comments');
// import middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// create routes
router.post('/:id', auth, multer, commentsCtrl.createComment);
router.get('/', auth, commentsCtrl.getAllComments);
router.get('/:id', auth, commentsCtrl.getOneComment);
router.put('/:id', auth, multer, commentsCtrl.modifyComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);

// export router
module.exports = router;