import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/**
 * API Class
 * 
 * Static class for making API calls.
 */

class ProjectrsApi {

    /** Get a list of podcast episodes */

    static async getPodcasts(params) {
        console.debug("Fetching podcasts : " + JSON.stringify(params))
        const res = await axios.get(`${BASE_URL}/podcasts/?page=${params.page}&limit=${params.limit}`);
        return res.data;
    }
    
    /** Get a list of tags */

    static async getTags(params) {
        console.debug("Fetching tags")
        const res = await axios.get(`${BASE_URL}/tags/?page=${params.page}&limit=${params.limit}`);
        return res.data;
    }

    /** Get a list of Responses */

    static async getResponses(params) {
        console.debug("Fetching responses")
        const res = await axios.get(`${BASE_URL}/responses/?page=${params.page}&limit=${params.limit}`);
        return res.data;
    }

    /** Get a list of Contributors */

    static async getContributors(params) {
        console.debug("Fetching contributors")
        const res = await axios.get(`${BASE_URL}/contributors/?page=${params.page}&limit=${params.limit}`);
        return res.data;
    }

    /** Get a specific podcast by its slug or id */

    static async getPodcast(slug_or_id) {
        console.debug(`Fetching podcast: ${slug_or_id}`)
        const res = await axios.get(`${BASE_URL}/podcasts/${slug_or_id}`);
        return res.data;
    }

    /** Get a specific contributor by their slug or id */

    static async getContributor(slug_or_id) {
        console.debug(`Fetching contributor: ${slug_or_id}`)
        const res = await axios.get(`${BASE_URL}/contributors/${slug_or_id}`);
        return res.data;
    }

    /** Get a specific tag by its slug or id */

    static async getTag(slug_or_id) {
        console.debug(`Fetching tag: ${slug_or_id}`)
        const res = await axios.get(`${BASE_URL}/tags/${slug_or_id}`);
        return res.data;
    }

    /** Get a specific response by its slug or id */

    static async getResponse(slug_or_id) {
        console.debug(`Fetching response: ${slug_or_id}`)
        const res = await axios.get(`${BASE_URL}/responses/${slug_or_id}`);
        return res.data;
    }

    /** Get a list of podcasts by tag id */

    static async getPodcastsByTag(tag_id) {
        console.debug(`Fetching podcasts for tag: ${tag_id}`)
        const res = await axios.get(`${BASE_URL}/tags/${tag_id}/podcasts`);
        return res.data;
    }

    /** Get a list of tags by podcast id */

    static async getTagsByPodcast(podcast_id) {
        console.debug(`Fetching tags for podcast: ${podcast_id}`)
        const res = await axios.get(`${BASE_URL}/podcasts/${podcast_id}/tags`);
        return res.data;
    }

    /** Get a list of responses by tag id */

    static async getResponsesByTag(tag_id) {
        console.debug(`Fetching responses for tag: ${tag_id}`)
        const res = await axios.get(`${BASE_URL}/tags/${tag_id}/responses`);
        return res.data;
    }

    /** Get a list of tags by response id */

    static async getTagsByResponse(response_id) {
        console.debug(`Fetching tags for response: ${response_id}`)
        const res = await axios.get(`${BASE_URL}/responses/${response_id}/tags`);
        return res.data;
    }

    /** Get a list of responses by podcast id */

    static async getResponsesByPodcast(podcast_id) {
        console.debug(`Fetching responses for podcast: ${podcast_id}`)
        const res = await axios.get(`${BASE_URL}/podcasts/${podcast_id}/responses`);
        return res.data;
    }

    /** Get a list of podcasts by response id */

    static async getPodcastsByResponse(response_id) {
        console.debug(`Fetching podcasts for response: ${response_id}`)
        const res = await axios.get(`${BASE_URL}/responses/${response_id}/podcasts`);
        return res.data;
    }

    /** Get a list of contributors by podcast id */

    static async getContributorsByPodcast(podcast_id) {
        console.debug(`Fetching contributors for podcast: ${podcast_id}`)
        const res = await axios.get(`${BASE_URL}/podcasts/${podcast_id}/contributors`);
        return res.data;
    }

    /** Get a list of podcasts by contributor id */

    static async getPodcastsByContributor(contributor_id) {
        console.debug(`Fetching podcasts for contributor: ${contributor_id}`)
        const res = await axios.get(`${BASE_URL}/contributors/${contributor_id}/podcasts`);
        return res.data;
    }

    /** Get a list of contributors by response id */

    static async getContributorsByResponse(response_id) {
        console.debug(`Fetching contributors for response: ${response_id}`)
        const res = await axios.get(`${BASE_URL}/responses/${response_id}/contributors`);
        return res.data;
    }

    /** Get a list of responses by contributor id */

    static async getResponsesByContributor(contributor_id) {
        console.debug(`Fetching responses for contributor: ${contributor_id}`)
        const res = await axios.get(`${BASE_URL}/contributors/${contributor_id}/responses`);
        return res.data;
    }


    

}

export default ProjectrsApi;