const examples = require('../server/controllers/examples.server.controller.js.js'),
    express = require('express'), 
    router = express.Router()

router.route('/')
  .get(examples.hello);
  
module.exports = router;