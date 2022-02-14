import http from "../http-common";

// make the functions that make api calls 
class RestaurantDataService {
    // default page number = 0
    // get request of the url (added to the end of the base url)
    getAll(page = 0) {
        return http.get(`restaurants?page=${page}`);
    }

    // get a specific id 
    get(id) {
        return http.get(`/restaurant?id=${id}`);
    }

    // find take a query (search term), by - searching by and what page number we want
    find(query, by = "name", page = 0) {
        return http.get(`restaurants?${by}=${query}&page=${page}`);
    }
    
    createReview(data) {
        return http.post("/review-new", data);
    }

    updateReview(data) {
        return http.put("/review-edit", data);
    }

    deleteReview(id, userId) {
        return http.delete(`/review-delete?id=${id}`, { data: { user_id: userId } });
    }

    getCuisines(id) {
        return http.get(`/cuisines`);
    }
}

export default new RestaurantDataService();