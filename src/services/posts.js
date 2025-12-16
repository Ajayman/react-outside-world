import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 4000
})
async function getPosts() {
    const resource = "posts"
    try {
        const response = await api.get(resource);
        return response.data;
    } catch (error) {
        throw { error }
    }

}

async function postPosts(payload) {
    const resource = "posts";
    try{
        const response = await api.post(resource, payload);
        return response.data;
    }catch(error){
        throw {error}
    }   
}

export { getPosts, postPosts };