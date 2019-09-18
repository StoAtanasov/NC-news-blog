import axios from "axios";

const request = axios.create({
  baseURL: "https://news-from-nc.herokuapp.com/api"
});

export const getArticlesByParams =(topic, sort_by) => {
  return request
    .get(`/articles`, {
      params: { topic, sort_by }
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

export const postArticleComment = (article_id, newComment) => {
  return request
    .post(`/articls/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
}

export const deleteComment = (comment_id) => {
  return request
  .delete(`/comments/${comment_id}`);
 };

 export const patchCommentVotes = (vote, comment_id) => {
   return request
     .patch(`/comments/${comment_id}`, {inc_votes: vote})
     .then(({ data }) => {
       return data.comment;
     });
 }

 export const patchArticleVotes = (vote, article_id) => {
   return request.patch(`/articles/${article_id}`, {inc_votes: vote}).then(({data})=>{
     return data.article;
   })
 }
