import express from "express" 
import RestaurantsCtrl from "./restaurants.controller.js"

const router = express.Router() // get access to the express router 

router.route("/").get(RestaurantsCtrl.apiGetRestaurants) // get the Return at the route from the RestaurantsCtrl file 

export default router
