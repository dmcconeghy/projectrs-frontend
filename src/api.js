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
        console.debug("Fetching podcasts")

        const res = await axios.get(`${BASE_URL}/podcasts/`);
        // console.log(res.data)
        return res.data;
    }
    
    /** Get a list of tags */

    static async getTags() {
        console.debug("Fetching tags")
        const res = await axios.get(`${BASE_URL}/tags`);
        return res.data;
    }

    static async getResponses() {
        console.debug("Fetching responses")
        const res = await axios.get(`${BASE_URL}/responses`);
        return res.data;
    }

    static async getContributors() {
        console.debug("Fetching contributors")
        const res = await axios.get(`${BASE_URL}/contributors`);
        return res.data;
    }

    static async getPodcast(slug_or_id) {
        console.debug(`Fetching podcast: ${slug_or_id}`)
        const res = await axios.get(`${BASE_URL}/podcasts/${slug_or_id.slug}`);
        console.log("Tried to fetch slug: ", slug_or_id.slug)
        return res.data;
    }

    static async getContributor(slug) {
        console.debug(`Fetching contributor: ${slug}`)
        const res = await axios.get(`${BASE_URL}/contributors/${slug}`);
        console.log("Tried to fetch slug: ", slug)
        return res.data;
    }

    static async getTag(slug_or_id) {
        console.debug(`Fetching tag: ${slug_or_id}`)
        const res = await axios.get(`${BASE_URL}/tags/${slug_or_id.id}`);
        console.log("Tried to fetch slug: ", slug_or_id.slug)
        return res.data;
    }


    // static async getPodcastsByTag(tag_id) {
    //     const res = await axios.get(`${BASE_URL}/podcasts/tag/${tag_id.tag_id}`);
    //     return res.data;
    // }

    // static async getTagsByPodcast(podcast_id) {
    //     const res = await axios.get(`${BASE_URL}/tags/podcast/${podcast_id}`);
    //     return res.data;
    // }
}

export default ProjectrsApi;