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
        const res = await axios.get(`${BASE_URL}/podcasts/?per_page=2`);
        return res.data;
    }
    
    /** Get a list of tags */

    static async getTags() {
        const res = await axios.get(`${BASE_URL}/tags`);
        return res.data;
    }

    static async getResponses() {
        const res = await axios.get(`${BASE_URL}/responses`);
        return res.data;
    }

    static async getContributors() {
        const res = await axios.get(`${BASE_URL}/contributors`);
        return res.data;
    }
}

export default ProjectrsApi;