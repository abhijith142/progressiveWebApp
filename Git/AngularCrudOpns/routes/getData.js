var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/angularMeteor");
var id=0;
var HerosSchema = new mongoose.Schema({
	id:Number,
	title : String,
	fName : String,
	lName : String,
	moviesCount : Number,
	movies : Object,
	power : Number
});

var heros = mongoose.model("heros", HerosSchema);
router.get("/", function(req, res) {
	heros.find(function(err, docs) {
		res.json(docs);
	})
});
router.put("/:id", function(req, res) {
	var id = req.body.id;
	heros.update({
		id : id
	}, {
		$set : {
			fName : req.body.fName,
			lName : req.body.lName,
			moviesCount : req.body.moviesCount,
			power : req.body.power
		}
	}, function(err, docs) {
		console.log(docs)
	});
	res.send(id);
});
router.post("/",function(req,res){
	id++;
	var hero=req.body;
	
	hero=new heros(hero);
	hero.id=id;
	hero.save(function(err,docs){
		console.log(docs);
	})
	res.send("hero added");
})
router.delete("/:id",function(req,res){
	var id=req.params.id;
	heros.remove({id:id},function(err,docs){
		console.log(err);
	});
	res.send(id);
})
module.exports = router;