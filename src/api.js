import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/**
 * API Class
 * 
 * Static class for making API calls.
 */

class ProjectrsApi {

    /** Get a list of podcast episodes */

    static async getPodcasts() {
        const res = await axios.get(`${BASE_URL}/podcasts`);
        return res.data;
    }
    
    /** Get a list of tags */

    static async getTags() {
        const res = await axios.get(`${BASE_URL}/tags`);
        return res.data;
    }
}

export default ProjectrsApi;