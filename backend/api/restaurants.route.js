import express from "express" 
import RestaurantsCtrl from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router() // get access to the express router 

router.route("/").get(RestaurantsCtrl.apiGetRestaurants) // get the Return at the route from the RestaurantsCtrl file 

// route to put the new review 
router
    .route("/review")
    .post(ReviewsCtrl.apiPostReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)

export default router
