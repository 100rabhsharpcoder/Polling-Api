const  express= require('express');

const router  = express.Router();


// api version 1.0 accessing v1 filder index.js

router.use('/v1', require('./v1/index'));


module.exports= router;