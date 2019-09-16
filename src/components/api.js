import axios from "axios";

const request = axios.create({
  baseURL: "https://news-from-nc.herokuapp.com/api"
});

export const getAllArticles =(topic) => {
  return request.get("/articles",{params: {
    topic  }}).then(({data})=>{
      return data.articles
    });
}
export const getAllTopcs= () =>{
  return request.get("/topics").then(({data})=>{
    console.log(data.topics)
    return data.topics
  })
}
