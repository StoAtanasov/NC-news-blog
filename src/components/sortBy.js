import React, { Component } from "react";
import { Button } from "react-bootstrap";


class SortBy extends Component {
  state = {
    sort_by: "created_at",
    order: "desc"
  };
  render() {
    return (
      <div>
        <form className="sortingForm" onSubmit={this.HandleSubmit}>
          <label className="sortingBy">Sort by:</label>
          <select className="selectSortOrder" name="sort_by" onChange={this.handleChange}>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
          <label className="orderBy"> Order: </label>
          <select className="selectSortOrder" name="order" onChange={this.handleChange}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </form>
        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    );
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { fetchArticles } = this.props;
    const { sort_by, order } = this.state;
    fetchArticles(sort_by, order);
  };
}
 
export default SortBy;
