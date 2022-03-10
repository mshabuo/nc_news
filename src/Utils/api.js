import axios from "axios";

const api = axios.create ({
    baseURL: "https://gogest.herokuapp.com/api"
});

export const getArticles = () => {
    return api.get("/articles")
    .then((res)=>{
return res.data.articles
    })
}

export const getArticlesTopics = () => {
    return api.get("/topics")
    .then((res)=>{
return res.data
    })
}
export const getArticlesByTopic = (topic) => {
    return api.get(`/articles?topic=${topic}`)
    .then((res)=>{
return res.data.articles
    })
}

export const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`).then((res)=>{
        return res.data.article[0]
    })
}