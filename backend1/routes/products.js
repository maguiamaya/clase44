const express = require("express");
const router = express.Router();
const {add,detail,edit,list,remove,update,save} = require('../controllers/productsController')



router.get("/detail",detail);



module.exports = router