const express = require('express')

const router  = express.Router();
router.route("/")
	//Get all meetups
	.get((req,res) =>{
	
	})
	//Create new meetup
	.post((req,res) =>{
	
	});

router.route("/:id")
	//Get meetup by Id
	.get((req,res) =>{

	})
	//delete meetup by Id
	.delete((req,res) =>{

	})
	//update meetup by id
	.put((req,res) =>{
	});

router.route("/:id/cancel)
	.post((req,res) => {

	});

router.route("/:id/register")
	.post((req,res) =>{

	});
	.post((req,res) =>{
	
	});

router.route("/:id/attendees")
	.get((res,res) =>{
	
	});

module.exports = router;
