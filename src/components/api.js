import axios from "axios";

const request = axios.create({
  baseURL: "https://news-from-nc.herokuapp.com/api"
});

export const getArticlesByParams =(topic) => {
  return request
    .get(`/articles`, {
      params: { topic }
    })
    .then(({ data }) => {
      return data.articles;
    });
}


export const getArticle = article_id => {
  return request.get(`/articles/${article_id}`)
  .then(({data}) =>{
    return data.article
   })
}

export const getAllTopcs= () =>{
  return request.get("/topics").then(({data})=>{
    return data.topics
  })
}

export const getArtcilceComments = article_id => {
  return request.get(`/articles/${article_id}/comments`).then(({data}) =>{
    return data.comments;
  })
}
