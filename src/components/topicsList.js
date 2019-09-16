import React, { Component } from 'react';
import {Link} from '@reach/router';
import * as api from './api';

class TopicsList extends Component {
  state = {
    topics: [],
    isLoading: true
  };
  render() {
    const {topics} = this.state;
    return(
      <div>
        {topics.map(topic => {
          return (
            <ul>
              <li>
                {" "}
                <Link
                  to={`/topics/${topic.slug}`}
                >
                  {topic.slug}
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }

  componentDidMount(){
    this.fetchArticlesByTopic();
  }
  fetchArticlesByTopic = () => {

    api.getAllTopcs().then(topics => {
      console.log("topics", topics);
      this.setState({topics, isLoading: false})
    })
  };
}
 
export default TopicsList;