import express from "express" 

const router = express.Router() // get access to the express router 

// route url, the response is hello world 
router.route("/").get((req,res) => res.send("hello world")) // will be adding more routes 

export default router
