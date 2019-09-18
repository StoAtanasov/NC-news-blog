import React from "react";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";

const SortBy = props => {
  console.log("sort by", props);
  return (
    <Dropdown
      as={ButtonGroup}
      onClick={event => {
        const sort_by = event.target.name;
        console.log(sort_by);
        if (sort_by) {
          props.fetchArticles(sort_by);
        }
      }}
    >
      <Button variant="warning">Sort by</Button>
      <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item name="created_at">Date</Dropdown.Item>
        <Dropdown.Item name="comment_count"> Comments</Dropdown.Item>
        <Dropdown.Item name="votes">Votes</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortBy;
