import axios from "axios";

const request = axios.create({
  baseURL: "https://news-from-nc.herokuapp.com/api"
});

export const getArticlesByParams =(topic, article_id) => {
  return request.get("/articles",{params: {
    topic, article_id  }}).then(({data})=>{
      console.log(data.articles);
      return data.articles
    });
}


export const getAllTopcs= () =>{
  return request.get("/topics").then(({data})=>{
    return data.topics
  })
}
