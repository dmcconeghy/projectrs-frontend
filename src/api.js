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
        console.log("Trying to fetch podcasts")

        const res = await axios.get(`${BASE_URL}/podcasts/`);
        // console.log(res.data)
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

    static async getPodcast(slug) {
        const res = await axios.get(`${BASE_URL}/podcasts/${slug}`);
        console.log("Tried to fetch slug: ", slug)
        return res.data;
    }

    static async getContributor(slug) {
        const res = await axios.get(`${BASE_URL}/contributors/${slug}`);
        console.log("Tried to fetch slug: ", slug)
        return res.data;
    }
}

export default ProjectrsApi;