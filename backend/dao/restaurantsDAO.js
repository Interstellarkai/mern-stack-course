// DAO - Data Access Object 

let restaurants // store reference to db 


// export class with several async methods
export default class RestaurantsDAO {
    // connect to db initially (as our server starts)
    static async injectDB(conn){
        // reference is filled 
        if (restaurants) {
            return
        }
        // if reference is not filled, we will try to connect with a specific reference in our DB 
        try {
            restaurants = await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants")
        } catch(e) {
            console.error(
                `Unable to establish a collection handle in restaurantsDAO: ${e}`
            )
        }
    }

    // get a list of restaurants in the DB 
    static async getRestaurants({
        // options 
        filters = null,
        page = 0, 
        restaurantsPerPage = 20, 
    } = {}) {
        // query
        let query 
        // 3 different filters 
        if (filters) {
            if ("name" in filters) {
                query = { $text: { $search: filters['name'] } } // text search, search any word in that text
            } 
            else if ("cuisine" in filters) {
                query = { "cusine": { $eq: filters['cuisine'] } } // if cuisine in db equals to the cuisine passed in, search for cuisine
            }
            else if ("zipcode" in filters) {
                query = { "address.zipcode": { $eq: filters['zipcode'] } }
            }
        }

        let cursor

        try {
            // find all the restaurants from the database that go along with the query that was passed in
            cursor = await restaurants
            .find(query)
        } catch(e){
            console.error(`Unable to issue find command, ${e}`)
            return { restaurantsList: [], totalNumRestaurants: 0}
        }

        const displayCursor = cursor.limit(restaurantsPerPage).skip(restaurantsPerPage * page) // get to a specific page

        try {
            const restaurantsList = await displayCursor.toArray()
            const totalNumRestaurants = await restaurants.countDocuments(query)

            return { restaurantsList, totalNumRestaurants }
        } catch(e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`
            )
            return { restaurantsList: [], totalNumRestaurants: 0}
        }
    }
}