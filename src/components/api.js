import axios from "axios";

const request = axios.create({
  baseURL: "https://news-from-nc.herokuapp.com/api"
});

export const getAllArticles = async() => {
  const {data} = await request.get("/articles");
  console.log("data",data.articles)
  return data.articles;
}