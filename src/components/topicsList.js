import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "./api";

class TopicsList extends Component {
  state = {
    topics: [],
    isLoading: true,
    error: null
  };
  render() {
    const { topics, isLoading, error } = this.state;
    if(error) return 

    if(isLoading) return <p>Loading...</p>
    return (
      <div>
        {topics.map(topic => {
          return (
            <ul key={topic.slug}>
              <li>
                {" "}
                <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticlesByTopic();
  }
  fetchArticlesByTopic = () => {
    api
      .getAllTopcs()
      .then(topics => {
        this.setState({ topics, isLoading: false });
      })
      .catch(error => {
        this.setState({
          error: {
            status: error.response.status,
            msg: error.response.data.msg
          },
          isLoading: false
        });
      });
  };
}

export default TopicsList;
