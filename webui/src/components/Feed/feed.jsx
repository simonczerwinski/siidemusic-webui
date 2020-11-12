import React, { Component } from "react";
import { FeedData } from "./feedData";
import { Link } from "react-router-dom";

class Feed extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {FeedData.map((item, index) => {
          return (
            <div key={index} className="col-lg-8 align-self-baseline intro">
              {item.text}
              <Link to={item.path} className={item.linkClassName}>
                {item.linkName}
              </Link>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Feed;
